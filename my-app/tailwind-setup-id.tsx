export default function TailwindSetup() {
    return (
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Solusi Pengaturan Tailwind CSS</h1>
  
        <div className="space-y-6">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
            <h2 className="font-semibold text-amber-800">Error yang Ditemui</h2>
            <p className="text-amber-700 mt-1">
              <code>Error: could not determine executable to run</code> saat menjalankan{" "}
              <code>npm exec tailwindcss init -p</code>
            </p>
          </div>
  
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Pilihan Solusi:</h2>
  
            <div className="bg-gray-50 p-4 rounded border">
              <h3 className="font-medium">Opsi 1: Install Tailwind CSS secara lokal terlebih dahulu</h3>
              <pre className="bg-gray-800 text-gray-100 p-3 rounded mt-2 overflow-x-auto">
                <code>npm install -D tailwindcss postcss autoprefixer</code>
              </pre>
              <p className="mt-2 text-sm text-gray-600">Kemudian inisialisasi:</p>
              <pre className="bg-gray-800 text-gray-100 p-3 rounded mt-1 overflow-x-auto">
                <code>npx tailwindcss init -p</code>
              </pre>
            </div>
  
            <div className="bg-gray-50 p-4 rounded border">
              <h3 className="font-medium">Opsi 2: Gunakan npx sebagai pengganti npm exec</h3>
              <pre className="bg-gray-800 text-gray-100 p-3 rounded mt-2 overflow-x-auto">
                <code>npx tailwindcss init -p</code>
              </pre>
              <p className="mt-2 text-sm text-gray-600">
                npx akan mengunduh dan menjalankan paket dalam satu langkah jika belum terinstal.
              </p>
            </div>
  
            <div className="bg-gray-50 p-4 rounded border">
              <h3 className="font-medium">Opsi 3: Periksa masalah perizinan</h3>
              <p className="mt-1 text-sm text-gray-600">
                Jika Anda menggunakan Windows, coba jalankan command prompt atau terminal sebagai administrator.
              </p>
            </div>
          </div>
  
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h3 className="font-semibold text-blue-800">Pendekatan yang Direkomendasikan</h3>
            <p className="text-blue-700 mt-1">
              Metode yang paling dapat diandalkan adalah menginstal paket secara lokal terlebih dahulu, kemudian
              inisialisasi:
            </p>
            <pre className="bg-gray-800 text-gray-100 p-3 rounded mt-2 overflow-x-auto">
              <code>npm install -D tailwindcss postcss autoprefixer npx tailwindcss init -p</code>
            </pre>
          </div>
        </div>
      </div>
    )
  }
  
  