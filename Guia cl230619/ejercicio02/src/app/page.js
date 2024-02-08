import styles from "./page.module.css";
const Equipos = ({ equipos }) => {
  return (
    <div className={styles.container__list}>
      <h2 className={styles.title}>Equipos de Fútbol</h2>
      {equipos.map((equipo) => (
        <div key={equipo.id}>
         
          <h3 className={styles.nameclub}>{equipo.nombre}</h3>
          <ul >
            
            {equipo.plantilla.map((jugador) => (
              
              <li className={styles.container__list} key={jugador.id}>
                <img src={jugador.imagen} className={styles.imagenes}></img>
                <br></br>
                <strong>{jugador.nombre}</strong>
                <p>Altura: {jugador.Altura}m <br></br> Peso:
                  {jugador.Peso}Kg</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default function Home() {
  // Simula la obtención de datos desde tu JSON
  const equiposData = [
    {
      "id": 1,
      "nombre": "Real Madrid",
      "plantilla": [
        { "id": 1,"imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdu2w9GPYa6Kbos9GQEHyzLH18T64O-TOgVA&usqp=CAU" , "nombre": "Eden Hazard", "Altura": "1.75", "Peso": "74Kg" },
        { "id": 2,"imagen": "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt34c30dfa5b2d1e56/64f330122d5df968960cc3d5/ezzzz_(1).jpg?auto=webp&format=pjpg&width=3840&quality=60" , "nombre": "Gonzalo García", "Altura": "1.82", "Peso": "74Kg" },
        { "id": 3,"imagen": "https://focus.belfasttelegraph.co.uk/thumbor/TdECDksW-8zsy1HUNnzlLwAzFMM=/0x8:1500x835/960x640/prod-mh-ireland/f770d732-9266-11ed-9f7b-0210609a3fe2.jpg" , "nombre": "Karim Benzema", "Altura": "1.85", "Peso": "81Kg" }
      ]
    },
    {
      "id": 2,
      "nombre": "Barcelona",
      "plantilla": [
       { "id": 1, "imagen": "https://img.a.transfermarkt.technology/portrait/big/74857-1674465246.jpg?lm=1" ,"nombre": "Marc-André ter Stegen", "Altura": "1.75", "Peso": "74Kg" },
        { "id": 2,"imagen": "https://pbs.twimg.com/profile_images/1676673383688294407/ZCG2fM-H_400x400.jpg" , "nombre": "Iñigo Martinez", "Altura": "1.82", "Peso": "74Kg" },
        { "id": 3,"imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOhKUjY_sqEEzDxTe9ce2vhxPe1zzm92zMhA&usqp=CAU" , "nombre": "Gavi", "Altura": "1.85", "Peso": "81Kg" }
      ]
    },
    {
      "id": 3,
      "nombre": "Miami",
      "plantilla": [
        { "id": 1,"imagen": "https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg" , "nombre": "Lionel Messi", "Altura": "1.7", "Peso": "72Kg" },
        { "id": 2,"imagen": "https://img.a.transfermarkt.technology/portrait/big/794699-1647683188.jpg?lm=1" , "nombre": "Edison Azcona", "Altura": "1.67", "Peso": "59Kg" },
        { "id": 3,"imagen": "https://img.a.transfermarkt.technology/portrait/big/606872-1678565380.jpg?lm=1" , "nombre": "Leonardo Campana", "Altura": "1.87", "Peso": "79Kg" }
      ]
    }
    // ... agregar otros equipos
  ];
  return (
    <main className={styles.main}>
      <div>
        <h1>Mi Aplicación de Fútbol</h1>
        
        <Equipos equipos={equiposData} />
      </div>
    </main>
  );
}
