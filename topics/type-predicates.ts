// # Topic: Type predicates

type Animal = { name: string; }
type Bird = Animal & { fly: () => void };
type Fish = Animal & { swim: () => void };
type SmallPet = Bird | Fish;

function isBird(pet: SmallPet): pet is Bird {
  return (pet as Bird).fly !== undefined;
}
function isFish(pet: SmallPet): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
function isKindFish(pet: SmallPet): pet is Fish {
  if (!isFish(pet)) {
    return false;
  }
  return pet.name !== 'sharkey';
}

// ## Example: Filters with type predicates

type SmallPetFactory = () => Bird | Fish;

function logger(s: string) {
  console.log(s);
}

const getSmallPet: SmallPetFactory = function () {
  const fish: Fish = { name: 'fishy', swim() {} };
  const bird: Bird = { name: 'birdy', fly() {} };
  if (Math.random() > 0.5) {
    logger(fish.name);
    return fish;
  }
  return bird;
}

const zoo: SmallPet[] = [
  getSmallPet(),
  getSmallPet(),
  getSmallPet(),
];

// ### OK
// ### Inferred Fish[] type array
const underwater_zoo_infer = zoo.filter(isFish);

// ### Preferred
// ### Forces right side of assignment to have correct predicate
const underwater_zoo_exp: Fish[] = zoo.filter(isFish);
const underWater_zoo_extra_rules: Fish[] = zoo.filter(isKindFish);
