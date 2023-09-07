function Drink({ name }) {
    let partOfPlant, coffeineContent, age;

    if (name === 'tea'){
      partOfPlant = 'leaf';
      coffeineContent = '15–70 mg/cup';
      age = '4,000+ years';
    }
    else {
      partOfPlant = 'bean';
      coffeineContent = '80–185 mg/cup';
      age = '1,000+ years';
    }

    return (
      <section>
        <h1>{name}</h1>
          <dl>
            <dt>Part of plant</dt>
            <dd>{partOfPlant}</dd>
            <dt>Caffeine content</dt>
            <dd>{coffeineContent}</dd>
            <dt>Age</dt>
            <dd>{age}</dd>
        </dl>
      </section>
    );
  }
  
  export default function DrinkList() {
    return (
      <div>
        <Drink name="tea" />
        <Drink name="coffee" />
      </div>
    );
  }
  