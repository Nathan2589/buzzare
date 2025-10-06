import 'dotenv/config';
import {put} from '@vercel/blob';
import {readFile} from 'fs/promises';
import {join} from 'path';

async function uploadVideos() {
    const videos = [
        'background.mp4',
        'website clip 29759-10227.mp4',
        'website clip 52649-2804.mp4',
        'website clip 63356-3687.mp4',
        'website clip 78294-8485.mp4'
    ];

    for (const video of videos) {
        try{
            const filePath = join(process.cwd(), 'public', video);
            const file = await readFile(filePath);

            const blob = await put(video, file, {
                access: 'public',
                contentType: 'video/mp4'
            });
            console.log(`Uploaded ${video}: ${blob.url}`);

        } catch (error) {
            console.error(`Error uploading ${video}:`, error);
        }
    }
}

uploadVideos()