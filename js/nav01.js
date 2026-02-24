// 1. FUNGSI PINDAH HALAMAN (HOME / VIHARA)
function showSection(sectionId) {
    const sections = ['sec-home', 'sec-vihara'];
    sections.forEach(s => {
        const el = document.getElementById(s);
        if(el) el.style.display = (s === 'sec-' + sectionId) ? 'block' : 'none';
    });
    
    // Update Header secara dinamis
    const title = document.getElementById('main-title');
    if(title) {
        title.innerText = (sectionId === 'home') ? "Bimbingan Masyarakat Buddha" : "Daftar Vihara Binaan";
    }
}

// 2. FUNGSI MODAL (STRUKTUR, SEJARAH, VISI MISI)
function openModal(type) {
    const modal = document.getElementById('infoModal');
    const body = document.getElementById('modal-body');
    let content = "";

    if (type === 'struktur') {
        content = `
            <h2 style="text-align:center; color:#1a2a6c; margin-bottom:20px;">Struktur Organisasi Bimas Buddha</h2>
            <div class="modal-scroll-area">


                <div class="struktur-item">
                    <div class="struktur-foto">
                        <img src="ico/foto/sugiyo.gif" alt="Foto Pembimas">
                    </div>
                    <div class="struktur-info">
                        <table class="table-biodata">
                            <tr><td><strong>Nama</strong></td><td>: Sugiyo, S.Ag.</td></tr>
                            <tr><td><strong>Jabatan</strong></td><td>: Pembimas Buddha Kantor Wilayah Kementerian Agama Provinsi Kalimantan Timur</td></tr>
                            <tr><td><strong>Pangkat/Golongan ruang</strong></td><td>: Pembina (IV/A)</td></tr>
                            <tr><td><strong>email</strong></td><td>: sugiyo1810@gmail.com</td></tr>
                        </table>
                    </div>
                </div>

                <hr class="pembatas">
                
                <div class="struktur-item">
                    <div class="struktur-foto">
                        <img src="ico/foto/widya_sati_murya_nanda.jpg" alt="Staf bimas">
                    </div>
                    <div class="struktur-info">
                        <table class="table-biodata">
                            <tr><td><strong>Nama</strong></td><td>: Widyasati Muryananda, S.Ag</td></tr>
                            <tr><td><strong>Jabatan</strong></td><td>: Perencana Ahli Muda </td></tr>
                            <tr><td><strong>Pangkat/Golongan ruang</strong></td><td>: Penata Tk. I (III/d)</td></tr>
                            <tr><td><strong>email</strong></td><td>: muryananda@gmail.com</td></tr>

                        </table>
                    </div>
                </div>

            <hr class="pembatas">
                <div class="struktur-item">
                    <div class="struktur-foto">
                        <img src="ico/foto/cahyoko01.jpg" alt="Staf bimas">
                    </div>
                    <div class="struktur-info">
                        <table class="table-biodata">
                            <tr><td><strong>Nama</strong></td><td>: Cahyoko, S.Ag</td></tr>
                            <tr><td><strong>Jabatan</strong></td><td>: Pembimbing Teknis Urusan Agama</td></tr>
                            <tr><td><strong>Pangkat/Golongan ruang</strong></td><td>: Penata Tk. I (III/d)</td></tr>
                            <tr><td><strong>email</strong></td><td>: cahyokojpr@gmail.com</td></tr>
                        </table>
                        </div>
                    </div>


         <hr class="pembatas">
                <div class="struktur-item">
                    <div class="struktur-foto">
                        <img src="ico/foto/sri andik cahyono.jpg" alt="Staf bimas">
                    </div>
                    <div class="struktur-info">
                        <table class="table-biodata">
                            <tr><td><strong>Nama</strong></td><td>: Sri Andik Cahyono, S.Pd.B</td></tr>
                            <tr><td><strong>Jabatan</strong></td><td>: Analis Kebijakan Ahli Pertama</td></tr>
                            <tr><td><strong>Pangkat/Golongan ruang</strong></td><td>: Penata Muda (III/a)</td></tr>
                            <tr><td><strong>email</strong></td><td>: andi8evo@gmail.com</td></tr>
                        </table>
                        </div>
                    </div>

   <hr class="pembatas">
                <div class="struktur-item">
                    <div class="struktur-foto">
                        <img src="ico/foto/Fajar Aprilianto,S.Tr.KOM.jpeg" alt="Staf bimas">
                    </div>
                    <div class="struktur-info">
                        <table class="table-biodata">
                            <tr><td><strong>Nama</strong></td><td>: Fajar Aprilianto, S.Tr.KOM</td></tr>
                            <tr><td><strong>Jabatan</strong></td><td>: Pranata Komputer Ahli Pertama</td></tr>
                            <tr><td><strong>Pangkat/Golongan ruang</strong></td><td>: Penata Muda (III/a)</td></tr>
                            <tr><td><strong>email</strong></td><td>: fajar2700@gmail.com</td></tr>
                        </table>
                        </div>
                    </div>

<hr class="pembatas">
                <div class="struktur-item">
                    <div class="struktur-foto">
                        <img src="ico/foto/ayu_anissa.jpeg" alt="Staf bimas">
                    </div>
                    <div class="struktur-info">
                        <table class="table-biodata">
                            <tr><td><strong>Nama</strong></td><td>: Ayu Annisa, S.E.</td></tr>
                            <tr><td><strong>Jabatan</strong></td><td>: Pengelola Pengadaan Barang /jasa Ahli pertama</td></tr>
                            <tr><td><strong>Pangkat/Golongan ruang</strong></td><td>: Penata Muda (III/a)</td></tr>
                            <tr><td><strong>email</strong></td><td>: ayu.annisa369@gmail.com</td></tr>
                        </table>
                        </div>
                    </div>

 <hr class="pembatas">
                <div class="struktur-item">
                    <div class="struktur-foto">
                        <img src="ico/foto/nurul_hnh.jpeg" alt="Staf bimas">
                    </div>
                    <div class="struktur-info">
                        <table class="table-biodata">
                            <tr><td><strong>Nama</strong></td><td>: Nurul Husnah, S.E</td></tr>
                            <tr><td><strong>Jabatan</strong></td><td>: Auditor Ahli Pertama</td></tr>
                            <tr><td><strong>Pangkat/Golongan ruang</strong></td><td>: Penata Muda (III/a)</td></tr>
                            <tr><td><strong>email</strong></td><td>: 199810302025052006@kemenag.go.idcom</td></tr>
                        </table>
                        </div>
                    </div>

            </div>`;



    } 
    else if (type === 'sejarah') {
        content = `
            <h2 style="text-align:center; color:#1a2a6c; margin-bottom:20px;">Sejarah Bimas Buddha Kaltim</h2>
            <div class="modal-scroll-area">
                <div class="history-container">
                    <div class="history-item">
                        <div class="history-year">Era Awal</div>
                        <p>
                        Sejarah Bimas Buddha Departemen Agama Republik Indonesia yang berdiri pada 3 Januari 1946 
                        awalnya belum memiliki unit pelayanan bagi pemeluk agama non-Muslim. 
                        Pembentukan unit tersebut baru terwujud setelah melalui proses panjang, 
                        berdasarkan prinsip kesetaraan sesuai Pancasila dan Undang-Undang Dasar Negara Republik Indonesia Tahun 1945. 
                        Umat Buddha pun terus berupaya memperjuangkan hak dan kedudukan yang setara.
                        Sejak Kongres Pertama Umat Buddha di Indonesia, 
                        muncul harapan agar tersedia Direktorat Jenderal khusus bagi umat Buddha. 
                        Setelah berbagai perjuangan, pada 2006 akhirnya dibentuk 
                        Direktorat Jenderal Bimbingan Masyarakat Buddha untuk melayani masyarakat Buddha.
                        </p>
                    </div>
                    <div class="history-item">
                        <div class="history-year">Tokoh-tokoh bersejarah</div>
                        <h3>DRS. OKA DIPUTRA</h3>
                        
                        <p>
                        Sejarah terbentuknya Direktorat Jenderal Bimas Buddha di lingkungan Departemen Agama Republik Indonesia tidak lepas dari peran Drs. 
                        I Gusti Ngurah Oka Diputhera (Dharmesvara), tokoh Buddhis kelahiran Jembrana, Bali, 17 Agustus 1934. 
                        Sejak 1958 ia bersama tokoh Hindu Bali memperjuangkan adanya perwakilan Hindu dan Buddha di Departemen Agama. 
                        Setelah diangkat menjadi PNS pada 1 Januari 1959, 
                        ia turut mempersiapkan berdirinya Bagian Urusan Hindu Bali yang dibentuk melalui KMA No. 40 Tahun 1960. 
                        Lembaga ini kemudian berkembang menjadi Biro (1963) 
                        dan selanjutnya menjadi Direktorat Jenderal Bimbingan Masyarakat Beragama Hindu Bali dan Buddha berdasarkan 
                        Keppres No. 170 Tahun 1966, yang kemudian disempurnakan strukturnya pada akhir 1960-an.</p>
                        
                        <br>
                        <p>
                        Selain berkiprah sebagai birokrat, Oka Diputhera aktif sebagai dharma duta dan organisatoris. 
                        Ia menggagas Lokakarya Pemantapan Ajaran Agama Buddha (1979) 
                        serta terlibat dalam Kongres Umat Buddha Indonesia yang melahirkan WALUBI dan memperkuat
                        usulan pembentukan Direktorat khusus Buddha. 
                        Melalui perjuangan Perwalian Umat Buddha Indonesia dan dukungan Menteri Agama saat itu,
                        Alamsyah Ratu Prawiranegara, terbit Keppres No. 
                        22 Tahun 1980 yang memisahkan Direktorat Urusan Agama Hindu dan Buddha. 
                        Pada 16 Desember 1980, Oka Diputhera dilantik sebagai Direktur Urusan Agama Buddha pertama.

                        </br>

                        <br>
                        <p>
                        Selama menjabat (1980–1990), ia meletakkan dasar kepemimpinan yang kuat, 
                        mengembangkan siaran Dharma di RRI dan TVRI, 
                        meningkatkan mutu pendidikan melalui pendirian PGA Buddha dan sejumlah perguruan tinggi agama Buddha, 
                        serta mendorong pembangunan vihara di berbagai daerah, termasuk Vihara Bhakti Pramuka di Cibubur.
                        Pada 1991, jabatan tersebut dilanjutkan oleh Letkol Pol. Drs. Budi Setiawan (1949–1999 masa jabatan). 
                        Ia dikenal disiplin dan berprinsip “Kudu Biso Sung Tulodo” (harus menjadi teladan). Di bawah kepemimpinannya, 
                        pembinaan aparatur diperkuat dengan penekanan pada loyalitas, 
                        integritas, profesionalitas, serta tanggung jawab sebagai abdi masyarakat, negara, dan Tuhan.
                        </br>
                        <br>
                        
                        <h3>Letkol Drs. Budi Setiawan</h3>
                        <p>
                        Pada masa kepemimpinan Drs. Budi Setiawan, M.Sc sebagai Direktur Urusan Agama Buddha di Departemen Agama Republik Indonesia, 
                        berbagai capaian penting diraih. Di bidang pendidikan tinggi, 
                        diterbitkan Peraturan Menteri Agama Nomor 1 Tahun 1993 
                        tentang Ujian Negara Perguruan Tinggi Agama Buddha dan Nomor 83 Tahun 1993 tentang Ijazah Strata Satu. 
                        Melalui kebijakan ini, ijazah perguruan tinggi agama Buddha memperoleh pengakuan resmi dari pemerintah. 
                        Selain itu, pembangunan dan peresmian vihara juga semakin berkembang di berbagai daerah Indonesia.
                        
                        </br>
                        <br>
                        <p>
                        Dalam kepemimpinannya, ia meneladani tokoh pewayangan Karna, ksatria yang dikenal setia kepada negara dan bangsa, 
                        menjunjung kehormatan orang tua, serta memegang teguh prinsip “satya tuhu” — kesatuan antara kata dan perbuatan. 
                        Nilai kesetiaan, integritas, dan keteladanan inilah yang menjadi landasan kepemimpinannya.

                        </p>
                        <br>
                        <h3>Cornelis Wowor, MA</h3>
                        <p>
                        Pada 1999, Drs. Budi Setiawan, M.Sc kembali bertugas di Kepolisian Negara Republik Indonesia. 
                        Ia menjabat sebagai Wakapolda Kalimantan Timur, kemudian Kadiskomlek Mabes Polri, 
                        Kapolda Bali, dan terakhir Kasespimpol di Lembang, Bandung. 
                        Posisi Direktur Urusan Agama Buddha selanjutnya diemban oleh Cornelis Wowor, MA.
                        </br>

                        <br>
                        <p>
                        Cornelis Wowor, MA dikenal luas di kalangan Buddhis sebagai mantan bhikkhu bernama Bhikkhu Agabbalo (1972–1980). 
                        Lahir di Tomohon, 5 Desember 1948, ia kemudian menikah dengan Lila Dewi Limartha dan dikaruniai dua putra. 
                        Kariernya di Direktorat Urusan Agama Buddha Departemen Agama Republik Indonesia dimulai sejak 1986 sebagai staf, 
                        lalu menduduki berbagai jabatan struktural hingga menjadi pejabat sementara pada Agustus 1999 dan resmi dilantik 
                        sebagai Direktur Urusan Agama Buddha.
                        </br>
                        
                        <br>
                        <p>
                        Di bawah kepemimpinannya, kegiatan penerangan dan penyebaran Dharma berkembang pesat. 
                        Ia juga aktif sebagai penulis dan penceramah. Pada masanya berdiri sejumlah perguruan tinggi agama Buddha, 
                        termasuk STAB Kertarajasa Malang, STAB Syailendra Kopeng Semarang, 
                        STAB Maha Prajna Jakarta, dan STAB Sriwijaya Tangerang–Banten yang kemudian menjadi STAB Negeri pertama di Indonesia. 
                        Selain itu, cita-cita umat Buddha untuk membentuk Direktorat Jenderal Bimbingan Masyarakat Buddha 
                        akhirnya terwujud pada era kepemimpinannya.
                        
                       
                        <p>
                        <br>
                        <h2>Direktorat Jenderal Bimbingan Masyarakat Buddha</h2>

                        Seiring era Reformasi, umat Buddha terus memperjuangkan pembentukan Direktorat Jenderal Bimbingan Masyarakat (Bimas) Buddha 
                        di Departemen Agama Republik Indonesia. Aspirasi ini disuarakan melalui berbagai organisasi, baik sangha, majelis-majelis agama Buddha, 
                        maupun lembaga seperti Perwalian Umat Buddha Indonesia dan organisasi kepemudaan serta kewanitaan Buddhis.

                        
                        <p>
                        <br>
                        Perjuangan tersebut membuahkan hasil dengan terbitnya Peraturan Presiden No. 63 Tahun 2005 dan Peraturan Menteri Agama No. 3 Tahun 2006 
                        yang secara resmi membentuk Ditjen Bimas Buddha beserta strukturnya: Sekretariat Ditjen dan Direktorat Urusan dan Pendidikan Agama Buddha. 
                        Pada 3 Februari 2006, Menteri Agama Muhammad Maftuh Basuni melantik Cornelis Wowor, MA sebagai Sekretaris Ditjen dan Drs. A. Joko Wuryanto 
                        sebagai Direktur Urusan dan Pendidikan Agama Buddha.

                        <p>
                        <br>
                        Setelah penantian panjang, pada 13 September 2006, Drs. Budi Setiawan, 
                        M.Sc resmi dilantik sebagai Direktur Jenderal Bimas Buddha pertama. 
                        Kembalinya ia ke Departemen Agama menepati janjinya sebelumnya, mencerminkan prinsip 
                        “satya tuhu” yang selama ini ia teladani dari tokoh pewayangan Karna — setia pada komitmen dan tanggung jawabnya.

                        </div>
                </div>
            </div>`;
    }
    else if (type === 'visimisi') {
        content = `
            <h2 style="text-align:center; color:#1a2a6c; margin-bottom:20px;">Visi & Misi</h2>
            <div class="modal-scroll-area">
                <div class="visi-misi-box">
                    <h3>Visi</h3>
                    <p>"Terwujudnya Masyarakat Buddha Indonesia yang Taat Beragama, Rukun, Harmonis, Cerdas dan Sejahtera."</p>
                    <br>
                    <h3>Misi</h3>
                    <ul>
                        <li>1. Meningkatkan kualitas pemahaman dan pengalaman nilai-nilai agama dalam membentuk mental umat Buddha;</li>
                        <li>2. Meningkatkan kerukunan intern umat beragama Buddha dalam memperteguh kebhinekaan;</li>
                        <li>3. Meningkatkan pelayanan kehidupan beragama Buddha yang merata dan berkualitas;</li>
                        <li>4. Meningkatkan akses dan mutu pendidikan agama dan pendidikan keagamaan yang berkarakter; dan </li> 
                        <li>5. Meningkatkan kualitas tata kelola pemerintahan yang bersih, akuntabel dan terpercaya.</li>

                    </ul>
                </div>
            </div>`;
    }
    
    body.innerHTML = content;
    modal.style.display = "block";
}

// 3. FUNGSI TUTUP MODAL
function closeModal() {
    document.getElementById('infoModal').style.display = "none";
}

// Tutup modal kalau klik di luar area konten modal
window.onclick = function(event) {
    const modal = document.getElementById('infoModal');
    if (event.target == modal) {
        closeModal();
    }
}

// 4. DATA & LOGIKA VIHARA
const allVihara = [
    { nama: "T.I.T.D. Thien Te Kong", wilayah: "wilayah3", alamat: "Berau", foto: "ico/images/1.jpg" },
    { nama: "Maha Vihara Sejahtera", wilayah: "wilayah1", alamat: "Samarinda", foto: "ico/images/2.jpg" },
];

function loadViharaData(kategori) {
    const container = document.getElementById('vihara-list-container');
    if(!container) {
        console.error("Elemen vihara-list-container tidak ditemukan!");
        return;
    }

    container.innerHTML = ""; 
    const hasilFilter = allVihara.filter(v => v.wilayah === kategori);

    if (hasilFilter.length === 0) {
        container.innerHTML = "<p style='text-align:center; width:100%; padding:20px;'>Data belum tersedia untuk wilayah ini.</p>";
        return;
    }

    hasilFilter.forEach(v => {
        // PERBAIKAN: Tambahkan onclick="bukaDetailVihara('${v.nama}')"
        container.innerHTML += `
            <div class="card">
                <div class="card-img" style="background-image: url('${v.foto}')"></div>
                <div class="card-body">
                    <h3>${v.nama}</h3>
                    <p>📍 ${v.alamat}</p>
                    <button class="btn-detail" onclick="bukaDetailVihara('${v.nama}')">Lihat Detail</button>
                </div>
            </div>`;
    });

    container.scrollIntoView({ behavior: 'smooth' });
}

function bukaDetailVihara(namaVihara) {
    const modal = document.getElementById('infoModal');
    const body = document.getElementById('modal-body');
    
    // Cari data vihara yang namanya sesuai
    const data = allVihara.find(v => v.nama === namaVihara);

    if (data) {
        body.innerHTML = `
            <div class="vihara-detail-container">
                <div class="vihara-detail-header">
                    <img src="${data.foto}" alt="${data.nama}" class="img-detail-vihara">
                    <h2>${data.nama}</h2>
                </div>
                <hr>
                <div class="vihara-info-list">
                    <p><strong><i class="fa-solid fa-location-dot"></i> Alamat:</strong><br> ${data.alamat}</p>
                    <p><strong><i class="fa-solid fa-phone"></i> Telepon:</strong> ${data.telepon || '-'}</p>
                    <p><strong><i class="fa-solid fa-clock"></i> Jam Operasional:</strong> ${data.jam_buka || '08:00 - 18:00'}</p>
                    <p><strong><i class="fa-solid fa-tag"></i> Kategori:</strong> ${data.kategori || 'Vihara Binaan'}</p>
                </div>
                <div class="vihara-action">
                    <button class="btn-maps" onclick="window.open('https://www.google.com/maps/search/${encodeURIComponent(data.nama)}', '_blank')">
                        <i class="fa-solid fa-map-location-dot"></i> Petunjuk Arah (Maps)
                    </button>
                </div>
            </div>
        `;
        modal.style.display = "block";
    }
}