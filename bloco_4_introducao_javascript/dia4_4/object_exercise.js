let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

  console.log(`Bem vinda, ${info.personagem}`);

  info.recorrente = "Sim";

  console.log(info);

  for (key in info) {
      console.log(key)
  }

  for (key in info) {
      console.log(info[key])
  }

  let info2 = {};
  info2 = Object.assign(info2, info);

  for (key in info2) {
      info2.personagem = "Tio patinhas";
      info2.origem = "Christmas on Bear Mountain, Dell's Four Color Comics #178";
      info2.nota = "O último MacPatinhas";
      info2.recorrente = "Sim"
  }

  console.log(info, info2)