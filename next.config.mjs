import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        domains: ['encrypted-tbn2.gstatic.com','encrypted-tbn0.gstatic.com','encrypted-tbn3.gstatic.com'],
    },
};
