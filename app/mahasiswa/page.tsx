import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function MahasiswaPage() {
  const mahasiswa = await prisma.mahasiswa.findMany();

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
        Daftar Mahasiswa
      </h1>

      {/* Looping data mahasiswa */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {mahasiswa.map((mhs) => (
          <li 
            key={mhs.id} 
            style={{ 
              border: '1px solid #ccc', 
              padding: '10px', 
              marginBottom: '10px', 
              borderRadius: '5px' 
            }}
          >
            <strong>{mhs.nama}</strong> <br />
            <span style={{ color: '#666' }}>Jurusan: {mhs.jurusan}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}