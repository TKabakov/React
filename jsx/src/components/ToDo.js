const baseUrl = 'https://i.imgur.com/';
const person = {
    name: 'Gregorio Y. Zara',
    theme: {
      backgroundColor: 'black',
      color: 'pink',
    },
    src: "https://i.imgur.com/7vQD0fPs.jpg",
    imageId: '7vQD0fP',
    imageSize: 's',
  };
  
  export default function TodoList() {
    return (
      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
          className="avatar"
          src={person.src}
          alt={person.name}
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
        <img
          className="avatar"
          src={baseUrl + person.imageId + person.imageSize + ".jpg"}
          alt={person.name}
        />
      </div>
    );
  }
  