import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

interface UploadedFile {
    url: string;
    name: string;
    pathName: string;
    mimeType: string;
}

/*
    image'leri yükleme işlevini gören helper fonksiyon,
    image'leri kontrol edip public klasörüne kaydeder.

    return olarak ise file yönetmek için pathName ve url gibi dataları döner.
*/
async function uploadFile(file: any, who: string, deleteIfExist: string = ''): Promise<UploadedFile> {
    try {
        
        if (deleteIfExist && fs.existsSync(deleteIfExist)) {
            fs.unlinkSync(deleteIfExist);
        }

        const compressedBuffer = await sharp(file.buffer).toBuffer();
        const mimeType = file.mimetype;

        const folderPath = path.join(__dirname, '../../public', 'files', who);
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
        }
        const fileName = Date.now() + path.extname(file.originalname)
        const filePath = path.join(folderPath, fileName);

        fs.writeFileSync(filePath, compressedBuffer);

        const url = '/static/files/' + who +  fileName;
        const pathName = 'public/files/' + who + fileName;

        return { url, name: fileName, pathName, mimeType };

    } catch (error) {
        throw error;
    }
}

/*
    imageleri silinmesi işlelvini gören helper fonksiyon
    
    çoğunlukla data sildiğimizde imageleri silmek istediğimiz işlevini görür
*/
async function deleteFile(filePath: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        fs.access(filePath, fs.constants.F_OK, (err) => {
            if (!err) {
                fs.unlink(filePath, (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            } else {
                resolve();
            }
        });
    });
}

module.exports = { uploadFile, deleteFile };
