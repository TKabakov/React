function Drink({ name }) {
    let PartOfPlant;
    let CoffeineContent;
    let Age;
    if (name === 'tea'){
      PartOfPlant = 'leaf';
      CoffeineContent = '15–70 mg/cup';
      Age = '4,000+ years';
    }
    else {
      PartOfPlant = 'bean';
      CoffeineContent = '80–185 mg/cup';
      Age = '1,000+ years';
    }
    return (
      <section>
        <h1>{name}</h1>
          <dl>
            <dt>Part of plant</dt>
            <dd>{PartOfPlant}</dd>
            <dt>Caffeine content</dt>
            <dd>{CoffeineContent}</dd>
            <dt>Age</dt>
            <dd>{Age}</dd>
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
  