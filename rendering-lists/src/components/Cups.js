let guest = 0;

function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 2;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}