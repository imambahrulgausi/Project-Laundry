// pages/Profile.js

export default function Profile() {
    return (
      <div className="flex min-h-screen items-center justify-center bg-green-500">
        <div className="bg-white p-6 rounded-lg shadow-md w-80">
          
          {/* Bingkai Foto */}
          <div className="flex justify-center mb-4">
            <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
              <img 
                src="https://via.placeholder.com/150" 
                alt="Profile Photo" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
  
          {/* Header */}
          <h1 className="text-2xl font-bold text-center mb-4">PROFILE</h1>
  
          {/* Nama */}
          <div className="mb-2">
            <h2 className="text-lg font-semibold">Nama:</h2>
            <p>JORDI MALIK</p>
          </div>
  
          {/* Alamat */}
          <div className="mb-2">
            <h2 className="text-lg font-semibold">Alamat:</h2>
            <p>Jl Ikang Tongkol, RT/RW 03/04</p>
          </div>
  
          {/* Nomor Telepon */}
          <div className="mb-2">
            <h2 className="text-lg font-semibold">No. Telepon:</h2>
            <p>08528383889</p>
          </div>

        </div>
      </div>
    );
  }
  