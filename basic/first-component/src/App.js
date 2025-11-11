// // import Profile from './profile'
// export default function Gallery() {
//   return (
//     <section>
//       <h1>Amazing photo</h1>
//       <Profile />
//       <Profile />
//     </section>
//   )
// }
import { getImageUrl } from './utils.js'
export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}