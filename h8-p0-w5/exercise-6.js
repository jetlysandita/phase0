function attack (damage) {
    // Code disini
    return damage
  }
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    // Code disini
    return attack((numberOfAttacks*damagePerAttack)-(numberOfAttacks*2))
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90