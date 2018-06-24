<?

ini_set('display_errors', 1);
error_reporting(E_ALL);

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
echo add('Dds', 0);
