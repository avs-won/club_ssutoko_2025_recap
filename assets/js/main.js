document.addEventListener("DOMContentLoaded", () => {

const stageData = [
    { track: "Belt Inner", time: "04:40.074", player: "에코", car: "bmw_m3_e92_track_2" },
    { track: "Belt Outer", time: "04:17.759", player: "8thsilver", car: "nissan_r34_voltexwing_lewis" },
    { track: "C1 Inner", time: "03:58.020", player: "8thsilver", car: "crsh_bmw_m4_cs_varis_1" },
    { track: "C1 Outer", time: "03:55.901", player: "8thsilver", car: "crsh_bmw_m4_cs_varis_1" },
    { track: "Mirai Outer", time: "05:09.828", player: "Hitme_Master", car: "bmw_m3_e92_track_2" },
    { track: "Shibuya", time: "02:35.325", player: "COOLJUN77", car: "bmw_m3_e92_track_2" },
    { track: "Shinjuku", time: "04:49.906", player: "FIVE GARDEN", car: "fx_audi_r8_gt_evo" },
    { track: "Wangan Inner", time: "05:18.385", player: "에코", car: "mworks_930t_wangan" },
    { track: "Wangan Outer", time: "04:05.545", player: "8thsilver", car: "nissan_r34_voltexwing_lewis" }
];

const matchupData = [
    { stage: "Belt Inner", wheel: "05:00.715", pad: "04:40.074", winner: "PAD" },
    { stage: "Belt Outer", wheel: "04:17.759", pad: "04:30.083", winner: "WHEEL" },
    { stage: "C1 Inner", wheel: "03:58.020", pad: "04:13.733", winner: "WHEEL" },
    { stage: "C1 Outer", wheel: "03:55.901", pad: "04:05.467", winner: "WHEEL" },
    { stage: "Shibuya", wheel: "02:35.325", pad: "02:52.774", winner: "WHEEL" },
    { stage: "Wangan Inner", wheel: "05:37.612", pad: "05:18.385", winner: "PAD" },
    { stage: "Wangan Outer", wheel: "04:05.545", pad: "05:11.812", winner: "WHEEL" }
];

const carUsage = [
    { model: "crsh_bmw_m4_cs_varis_1", count: 43 },
    { model: "bmw_m3_e92_track_2", count: 41 },
    { model: "fx_audi_r8_gt_evo", count: 34 },
    { model: "gbe_ferrari_812_superfast", count: 29 },
    { model: "nissan_r34_voltexwing", count: 22 },
    { model: "prvvy_e30_widebody", count: 21 },
    { model: "hyundai_genesis_mlz", count: 15 },
    { model: "mworks_930t_wangan", count: 15 },
    { model: "gbe_lamborghini_svj_f1", count: 11 },
    { model: "jw_porsche_carrera_gt", count: 10 },
    { model: "as_mazda_rx7_reamemiya", count: 10 },
    { model: "aegis_mitsubishi_evo_v", count: 10 },
    { model: "ddm_mazda_fc3s_re", count: 9 },
    { model: "naz_jza80_ridox", count: 9 },
    { model: "hyundai_i20n_hellspec", count: 9 },
    { model: "ltkaeri_honda_s2000_gt1", count: 7 },
    { model: "wm_ferrari_testarossa", count: 6 },
    { model: "nissan_r34_omori_factory", count: 6 },
    { model: "wm_nissan_fairlady_z_s30", count: 5 },
    { model: "jw_lexus_lfa", count: 5 },
    { model: "art_skyline_r32_gtr", count: 4 },
    { model: "subaru_impreza_wrx_sti", count: 4 },
    { model: "wm_porsche_911_930", count: 3 },
    { model: "mnba_shelby_gt500_track", count: 3 },
    { model: "hsrc_nissan_z33", count: 3 },
    { model: "mercedes_amg_gt_mlz", count: 3 },
    { model: "vw_golf_v_gti_s3", count: 2 },
    { model: "wm_nissan_s15", count: 2 },
    { model: "mnba_shelby_gt500_2020", count: 1 },
    { model: "kl_gr_86_trd", count: 1 },
    { model: "aegis_nissan_gtr_2017", count: 1 }
];

const userActivity = [
    { name: "에코", count: 28, sector: "7/9" },
    { name: "KOR_JJORI", count: 16, sector: "4/9" },
    { name: "한국인", count: 14, sector: "4/9" },
    { name: "불편하면짖는멍뭉이", count: 13, sector: "4/9" },
    { name: "8thsilver", count: 10, sector: "5/9" },
    { name: "theWOO", count: 10, sector: "4/9" },
    { name: "drakan0320", count: 10, sector: "4/9" },
    { name: "Blu_SantaFE_100", count: 9, sector: "3/9" },
    { name: "Monggle", count: 9, sector: "4/9" },
    { name: "KOR._Nexus", count: 7, sector: "3/9" },
    { name: "뭉뚜기", count: 7, sector: "3/9" },
    { name: "ehdyd0120", count: 7, sector: "3/9" },
    { name: "jangmin1013", count: 7, sector: "2/9" },
    { name: "Aveng", count: 6, sector: "3/9" },
    { name: "Master", count: 6, sector: "3/9" },
    { name: "SHJ", count: 6, sector: "2/9" },
    { name: "FIVE GARDEN", count: 6, sector: "4/9" },
    { name: "ち", count: 5, sector: "3/9" },
    { name: "청수주니", count: 5, sector: "3/9" },
    { name: "김춘식", count: 5, sector: "3/9" },
    { name: "N19HTMAR2", count: 5, sector: "4/9" },
    { name: "Snoopy", count: 5, sector: "3/9" },
    { name: "Player", count: 5, sector: "2/9" },
    { name: "swj7960", count: 4, sector: "1/9" },
    { name: "hxxux_", count: 4, sector: "1/9" },
    { name: "진원짱짱123", count: 4, sector: "1/9" },
    { name: "sl1zer", count: 3, sector: "2/9" },
    { name: "sae", count: 3, sector: "1/9" },
    { name: "ehqkrehgus", count: 3, sector: "2/9" },
    { name: "양파", count: 3, sector: "3/9" }
];

for(let i=31; i<=108; i++) {
    userActivity.push({ name: `User_${i}`, count: 1, sector: "1/9" });
}

/* Stage Champions */
const stageContainer = document.getElementById('stage-kings-container');
stageData.forEach(item => {
    const card = document.createElement('div');
    card.className = "glass-card p-6 rounded-lg";
    card.innerHTML = `
        <div class="flex justify-between items-start mb-6">
            <span class="text-[9px] font-black text-orange-500 uppercase tracking-widest">${item.track}</span>
            <span class="text-xl font-black text-white italic stat-value">${item.time}</span>
        </div>
        <p class="text-sm font-black text-white uppercase">${item.player}</p>
        <p class="text-[9px] text-slate-500 truncate font-bold uppercase">${item.car}</p>
    `;
    stageContainer.appendChild(card);
});

/* Matchup */
const matchupBody = document.getElementById('matchup-body');
matchupData.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${item.stage}</td>
        <td>${item.wheel}</td>
        <td>${item.pad}</td>
        <td class="text-right font-bold ${item.winner === 'WHEEL' ? 'text-orange-500' : 'text-cyan-400'}">${item.winner}</td>
    `;
    matchupBody.appendChild(row);
});

/* Car Ranking */
const carContainer = document.getElementById('car-ranking-container');
carUsage.forEach((item, index) => {
    const bar = document.createElement('div');
    const percent = (item.count / 43) * 100;
    bar.className = `p-4 bg-black/40 rounded border border-white/5 ${index >= 8 ? 'hidden-item car-extra' : ''}`;
    bar.innerHTML = `
        <div class="flex justify-between mb-2">
            <span>NO. ${(index+1).toString().padStart(2, '0')}</span>
            <span>${item.count} USE</span>
        </div>
        <p class="text-xs truncate">${item.model}</p>
        <div class="h-1 w-full bg-white/5 mt-2">
            <div class="h-full bg-cyan-500" style="width:${percent}%"></div>
        </div>
    `;
    carContainer.appendChild(bar);
});

document.getElementById('btn-car-more').addEventListener('click', function() {
    document.querySelectorAll('.car-extra').forEach(el => el.classList.toggle('hidden-item'));
});

/* Users */
const userBody = document.getElementById('user-activity-body');
userActivity.forEach((user, index) => {
    const row = document.createElement('tr');
    row.className = index >= 15 ? 'hidden-item user-extra' : '';
    row.innerHTML = `
        <td>#${(index+1).toString().padStart(3,'0')}</td>
        <td>${user.name}</td>
        <td>${user.count} Logs</td>
        <td>${user.sector} Coverage</td>
    `;
    userBody.appendChild(row);
});

document.getElementById('btn-user-more').addEventListener('click', function() {
    document.querySelectorAll('.user-extra').forEach(el => el.classList.toggle('hidden-item'));
});

/* Chart */
new Chart(document.getElementById('deviceChart'), {
    type: 'doughnut',
    data: {
        labels: ['Wheel', 'Gamepad', 'Keyboard'],
        datasets: [{
            data: [75, 22.1, 2.9],
            backgroundColor: ['#ff9d00', '#00f2ff', '#334155'],
            borderWidth: 0
        }]
    },
    options: {
        plugins: { legend: { display: false } },
        cutout: '85%'
    }
});

});
