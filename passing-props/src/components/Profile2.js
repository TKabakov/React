import { getImageUrl } from "./utils";

//Extract a Card component from the markup below, and use the children prop to pass different JSX to it:

function Avatar({person,size=150}){
    //default value for props
    return(
        <div className="card">
            <div className="card-content">
                <h3>Photo</h3>
                <img
                    className="avatar"
                    src={getImageUrl(person.imageId, size < 90 ? 's' : 'b')}
                    alt={person.name}
                    width={size}
                    height={size}
                />
            </div>
            <div className="card-content">
                <h3>About</h3>
                    <p>{person.discovery}</p>
          </div>
        </div>
    )
};

function Card({children}){
    return(
        <div className="card">
            {children}
        </div>
    )
};

export default function Profile2() {
    return (
        <Card>
            <Avatar
                person={{
                    name: "Aklilu Lemma",
                    imageId:"OKS67lh",
                    discovery:"Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.",
                }}
                size={undefined}
            />
        </Card>
    );
  };