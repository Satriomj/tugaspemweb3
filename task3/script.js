console.log(DATA);
const renderHelm = (data) => {
  const placeholder = document.getElementById("placeholder");
  let elm = ``;
  data.forEach((element) => {
    elm += `<section key="${element.guid}" style="width:150px">
  <img src="${element.src}" alt="gambar dari ${element.MerkHelm}" width="50" height="50" />
  <p>Merk Helm: ${element.MerkHelm}</p>
  <p>Harga Barang: ${element.HargaBarang}</p>
</section>`;
  });
  placeholder.innerHTML = elm;
};
const handleSearch = () => {
  key = document.getElementById("keyword").value;
  document.getElementById("cari").innerText = key;
  let data = DATA.filter((elm) => {
    let re = new RegExp(`${key.toLowerCase()}`, "gi");
    let res = elm.MerkHelm.toLowerCase().match(re);
    let bool = false;
    if (res !== null) {
      bool = true;
    }
    return bool;
  });
  renderHelm(data);
};