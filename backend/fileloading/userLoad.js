// userLoad.js
import fs from 'fs';
import csv from 'csv-parser';
import mongoose from 'mongoose';
import { connectDB, DistributionCenter } from '../db.js'; // ✅ correctly import from one place

export async function loadDistributionCentersFromCSV() {
    await connectDB(); // Connect to MongoDB

    const centers = [];

    fs.createReadStream('archive/distribution_centers.csv') // ✅ fixed path slashes
        .pipe(csv())
        .on('data', (row) => {
            centers.push({
                id: row.id,
                name: row.name,
                latitude: parseFloat(row.latitude),
                longitude: parseFloat(row.longitude)
            });
        })
        .on('end', async() => {
            try {
                await DistributionCenter.insertMany(centers);
                console.log(`✅ Inserted ${centers.length} distribution centers`);
            } catch (err) {
                console.error('❌ Error inserting distribution centers:', err);
            } finally {
                mongoose.connection.close();
            }
        });
}

loadDistributionCentersFromCSV();