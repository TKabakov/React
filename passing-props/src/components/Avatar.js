import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person.imageId, size < 90 ? 's' : 'b')}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
    let imageSize=60gg;
  return (
    <div>
    <Avatar
      size={imageSize}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
    <Avatar
    size={imageSize + 50}
    person={{ 
      name: 'Gregorio Y. Zara', 
      imageId: '7vQD0fP'
    }}
  /> 
    </div>

  );
}