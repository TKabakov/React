
function Cup({guest}) {
  // Bad: changing a preexisting variable
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
    let cups = [];
    for (let i=1; i<=12; i=i+2){
        cups.push(<Cup key={1} guest={i} />);
    }

  return (
        cups
  );
}