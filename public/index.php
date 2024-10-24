<?php
// phpinfo();

use Symfony\Component\HttpFoundation\Request;
use Twig\Environment;
use Twig\Extension\DebugExtension;
use Twig\Loader\FilesystemLoader;

require_once dirname(__DIR__) .  '/vendor/autoload.php';



$loader = new FilesystemLoader([dirname(__DIR__) . '/templates']);
$twig = new Environment(
    $loader,
    [
        'debug' => true
    ]
);
$twig->addExtension(new DebugExtension);
$foo = [
    'a',
    'b',
    'c'
];
/** @var  \Symfony\Component\HttpFoundation\Request  */
$request = Request::createFromGlobals();
$file = $request->query->get('cl');
$file = rtrim($file, '/');
if ( $file === ''){
    echo $twig->render('start.html.twig', ['name' => 'foo', 'items' => $foo]);
    return;
}

if (!file_exists(dirname(__DIR__) . '/templates/' . $file . '.html.twig')) {

    echo $twig->render('404.html.twig', ['name' => 'foo', 'file' => dirname(__DIR__) . '/templates' . $file . '.html.twig']);
} else {
    echo $twig->render($file . '.html.twig', ['name' => 'foo', 'items' => $foo]);
}
