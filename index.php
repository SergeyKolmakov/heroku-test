<?

function add(int $a = 0, int $b = 0): int {
  return $a + $b;
}



class User {

  private $name;

  public function __construct(string $name) {
    $this->name = $name;
  }
}


echo add(5, 3);
echo add(7, 0);
