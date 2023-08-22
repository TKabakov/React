//Extract a Card component from the markup below, and use the children prop to pass different JSX to it:
function Avatar(){
    return(
        <div>
            <div className="card-content">
                <h1>Photo</h1>
                <img
                    className="avatar"
                    src="https://i.imgur.com/OKS67lhm.jpg"
                    alt="Aklilu Lemma"
                    width={70}
                    height={70}
                />
            </div>
            <div className="card-content">
            <h1>About</h1>
            <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
          </div>
        </div>
    )

}

function Card(children){
    return(
        <div>
            {children}
        </div>
    )
}

export default function Profile2() {
    return (
      <div>
        <Card>
            <Avatar/>
        </Card>
        <div className="card">
          <div className="card-content">
            <h1>Photo</h1>
            <img
              className="avatar"
              src="https://i.imgur.com/OKS67lhm.jpg"
              alt="Aklilu Lemma"
              width={70}
              height={70}
            />
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h1>About</h1>
            <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
          </div>
        </div>
      </div>
    );
  }