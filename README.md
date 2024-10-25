```bs

[ydh@C01127 twig]$ tree -h

264 directories, 1557 files

[4.0K]  .
├── [4.0K]  Build
│   ├── [4.0K]  Bundler
│   │   ├── [1.8K]  bundle.ts
│   │   ├── [  57]  Interface.ts
│   │   └── [4.0K]  lib
│   │       ├── [ 526]  helper.ts
│   │       ├── [1.8K]  scripts.ts
│   │       └── [4.9K]  styles.ts
│   └── [4.0K]  scss
│       ├── [4.0K]  partials
│       │   └── [ 670]  main.scss
│       └── [ 853]  styles.scss
├── [ 165]  bundle.json
├── [ 198]  composer.json
├── [ 85K]  composer.lock
├── [ 12K]  node_modules            ["node_module wird mit npm install wieder erzeugt"]
├── [ 642]  package.json
├── [127K]  package-lock.json
├── [4.0K]  public
│   ├── [4.0K]  css
│   │   └── [744K]  styles.css
│   ├── [3.1K]  index.html
│   └── [1013]  index.php
├── [511K]  README.md
├── [4.0K]  templates
│   ├── [ 108]  404.html.twig
│   ├── [ 222]  bar.html.twig
│   ├── [ 524]  base.html.twig
│   ├── [4.0K]  foo
│   │   └── [  85]  bar.html.twig
│   ├── [ 157]  foo.html.twig
│   ├── [  23]  header.html.twig
│   └── [ 274]  start.html.twig
├── [ 739]  tsconfig.json
├── [4.0K]  vendor                                  [kann mit 'composer install' erzeugt werden]
│   ├── [ 771]  autoload.php
│   ├── [4.0K]  bin
│   │   ├── [3.4K]  patch-type-declarations
│   │   └── [3.3K]  var-dump-server
│   ├── [4.0K]  composer
│   │   ├── [1.7K]  autoload_classmap.php
│   │   ├── [1.1K]  autoload_files.php
│   │   ├── [ 139]  autoload_namespaces.php
│   │   ├── [2.5K]  autoload_psr4.php
│   │   ├── [1.6K]  autoload_real.php
│   │   ├── [8.8K]  autoload_static.php
│   │   ├── [ 16K]  ClassLoader.php
│   │   ├── [ 88K]  installed.json
│   │   ├── [ 13K]  installed.php
│   │   ├── [ 16K]  InstalledVersions.php
│   │   ├── [1.0K]  LICENSE
│   │   └── [ 925]  platform_check.php
│   ├── [4.0K]  psr
│   │   ├── [4.0K]  cache
│   │   │   ├── [ 746]  CHANGELOG.md
│   │   │   ├── [ 514]  composer.json
│   │   │   ├── [1.1K]  LICENSE.txt
│   │   │   ├── [ 546]  README.md
│   │   │   └── [4.0K]  src
│   │   │       ├── [ 162]  CacheException.php
│   │   │       ├── [3.8K]  CacheItemInterface.php
│   │   │       ├── [4.4K]  CacheItemPoolInterface.php
│   │   │       └── [ 299]  InvalidArgumentException.php
│   │   ├── [4.0K]  container
│   │   │   ├── [ 655]  composer.json
│   │   │   ├── [1.1K]  LICENSE
│   │   │   ├── [ 578]  README.md
│   │   │   └── [4.0K]  src
│   │   │       ├── [ 184]  ContainerExceptionInterface.php
│   │   │       ├── [1.0K]  ContainerInterface.php
│   │   │       └── [ 158]  NotFoundExceptionInterface.php
│   │   ├── [4.0K]  event-dispatcher
│   │   │   ├── [ 560]  composer.json
│   │   │   ├── [1.0K]  LICENSE
│   │   │   ├── [ 325]  README.md
│   │   │   └── [4.0K]  src
│   │   │       ├── [ 431]  EventDispatcherInterface.php
│   │   │       ├── [ 524]  ListenerProviderInterface.php
│   │   │       └── [ 785]  StoppableEventInterface.php
│   │   └── [4.0K]  log
│   │       ├── [ 555]  composer.json
│   │       ├── [1.1K]  LICENSE
│   │       ├── [1.3K]  README.md
│   │       └── [4.0K]  src
│   │           ├── [ 414]  AbstractLogger.php
│   │           ├── [  96]  InvalidArgumentException.php
│   │           ├── [ 231]  LoggerAwareInterface.php
│   │           ├── [ 347]  LoggerAwareTrait.php
│   │           ├── [2.7K]  LoggerInterface.php
│   │           ├── [2.7K]  LoggerTrait.php
│   │           ├── [ 336]  LogLevel.php
│   │           └── [ 643]  NullLogger.php
│   ├── [4.0K]  symfony
│   │   ├── [4.0K]  cache
│   │   │   ├── [4.0K]  Adapter
│   │   │   │   ├── [7.3K]  AbstractAdapter.php
│   │   │   │   ├── [ 13K]  AbstractTagAwareAdapter.php
│   │   │   │   ├── [ 861]  AdapterInterface.php
│   │   │   │   ├── [3.5K]  ApcuAdapter.php
│   │   │   │   ├── [ 11K]  ArrayAdapter.php
│   │   │   │   ├── [8.5K]  ChainAdapter.php
│   │   │   │   ├── [7.1K]  CouchbaseBucketAdapter.php
│   │   │   │   ├── [6.0K]  CouchbaseCollectionAdapter.php
│   │   │   │   ├── [ 15K]  DoctrineDbalAdapter.php
│   │   │   │   ├── [ 935]  FilesystemAdapter.php
│   │   │   │   ├── [8.8K]  FilesystemTagAwareAdapter.php
│   │   │   │   ├── [ 13K]  MemcachedAdapter.php
│   │   │   │   ├── [2.2K]  NullAdapter.php
│   │   │   │   ├── [ 907]  ParameterNormalizer.php
│   │   │   │   ├── [ 16K]  PdoAdapter.php
│   │   │   │   ├── [ 12K]  PhpArrayAdapter.php
│   │   │   │   ├── [9.8K]  PhpFilesAdapter.php
│   │   │   │   ├── [6.3K]  ProxyAdapter.php
│   │   │   │   ├── [1.7K]  Psr16Adapter.php
│   │   │   │   ├── [ 743]  RedisAdapter.php
│   │   │   │   ├── [ 12K]  RedisTagAwareAdapter.php
│   │   │   │   ├── [ 748]  TagAwareAdapterInterface.php
│   │   │   │   ├── [ 11K]  TagAwareAdapter.php
│   │   │   │   ├── [6.4K]  TraceableAdapter.php
│   │   │   │   └── [ 895]  TraceableTagAwareAdapter.php
│   │   │   ├── [5.8K]  CacheItem.php
│   │   │   ├── [5.6K]  CHANGELOG.md
│   │   │   ├── [1.8K]  composer.json
│   │   │   ├── [4.0K]  DataCollector
│   │   │   │   └── [5.8K]  CacheDataCollector.php
│   │   │   ├── [4.0K]  DependencyInjection
│   │   │   │   ├── [2.8K]  CacheCollectorPass.php
│   │   │   │   ├── [1.2K]  CachePoolClearerPass.php
│   │   │   │   ├── [10.0K]  CachePoolPass.php
│   │   │   │   └── [1.6K]  CachePoolPrunerPass.php
│   │   │   ├── [4.0K]  Exception
│   │   │   │   ├── [ 655]  CacheException.php
│   │   │   │   ├── [ 725]  InvalidArgumentException.php
│   │   │   │   └── [ 665]  LogicException.php
│   │   │   ├── [1.0K]  LICENSE
│   │   │   ├── [6.9K]  LockRegistry.php
│   │   │   ├── [4.0K]  Marshaller
│   │   │   │   ├── [3.5K]  DefaultMarshaller.php
│   │   │   │   ├── [1.1K]  DeflateMarshaller.php
│   │   │   │   ├── [1.0K]  MarshallerInterface.php
│   │   │   │   ├── [2.2K]  SodiumMarshaller.php
│   │   │   │   └── [3.0K]  TagAwareMarshaller.php
│   │   │   ├── [4.0K]  Messenger
│   │   │   │   ├── [2.2K]  EarlyExpirationDispatcher.php
│   │   │   │   ├── [2.4K]  EarlyExpirationHandler.php
│   │   │   │   └── [2.6K]  EarlyExpirationMessage.php
│   │   │   ├── [ 455]  PruneableInterface.php
│   │   │   ├── [7.6K]  Psr16Cache.php
│   │   │   ├── [ 942]  README.md
│   │   │   ├── [ 418]  ResettableInterface.php
│   │   │   └── [4.0K]  Traits
│   │   │       ├── [ 12K]  AbstractAdapterTrait.php
│   │   │       ├── [4.0K]  ContractsTrait.php
│   │   │       ├── [5.6K]  FilesystemCommonTrait.php
│   │   │       ├── [2.9K]  FilesystemTrait.php
│   │   │       ├── [ 762]  ProxyTrait.php
│   │   │       ├── [ 46K]  Redis5Proxy.php
│   │   │       ├── [ 52K]  Redis6Proxy.php
│   │   │       ├── [2.9K]  Redis6ProxyTrait.php
│   │   │       ├── [ 37K]  RedisCluster5Proxy.php
│   │   │       ├── [ 48K]  RedisCluster6Proxy.php
│   │   │       ├── [1.4K]  RedisCluster6ProxyTrait.php
│   │   │       ├── [1.2K]  RedisClusterNodeProxy.php
│   │   │       ├── [ 523]  RedisClusterProxy.php
│   │   │       ├── [ 488]  RedisProxy.php
│   │   │       ├── [ 30K]  RedisTrait.php
│   │   │       ├── [ 54K]  RelayProxy.php
│   │   │       ├── [6.6K]  RelayProxyTrait.php
│   │   │       └── [2.1K]  ValueWrapper.php
│   │   ├── [4.0K]  cache-contracts
│   │   │   ├── [2.3K]  CacheInterface.php
│   │   │   ├── [2.4K]  CacheTrait.php
│   │   │   ├── [ 832]  CallbackInterface.php
│   │   │   ├── [ 157]  CHANGELOG.md
│   │   │   ├── [ 946]  composer.json
│   │   │   ├── [1.7K]  ItemInterface.php
│   │   │   ├── [1.0K]  LICENSE
│   │   │   ├── [ 326]  README.md
│   │   │   └── [1011]  TagAwareCacheInterface.php
│   │   ├── [4.0K]  config
│   │   │   ├── [4.0K]  Builder
│   │   │   │   ├── [4.6K]  ClassBuilder.php
│   │   │   │   ├── [ 668]  ConfigBuilderGeneratorInterface.php
│   │   │   │   ├── [ 21K]  ConfigBuilderGenerator.php
│   │   │   │   ├── [ 702]  ConfigBuilderInterface.php
│   │   │   │   ├── [ 589]  Method.php
│   │   │   │   └── [1.7K]  Property.php
│   │   │   ├── [4.8K]  CHANGELOG.md
│   │   │   ├── [1.2K]  composer.json
│   │   │   ├── [ 937]  ConfigCacheFactoryInterface.php
│   │   │   ├── [1.0K]  ConfigCacheFactory.php
│   │   │   ├── [1.2K]  ConfigCacheInterface.php
│   │   │   ├── [1.6K]  ConfigCache.php
│   │   │   ├── [4.0K]  Definition
│   │   │   │   ├── [ 11K]  ArrayNode.php
│   │   │   │   ├── [ 14K]  BaseNode.php
│   │   │   │   ├── [1.2K]  BooleanNode.php
│   │   │   │   ├── [4.0K]  Builder
│   │   │   │   │   ├── [ 16K]  ArrayNodeDefinition.php
│   │   │   │   │   ├── [1.2K]  BooleanNodeDefinition.php
│   │   │   │   │   ├── [ 585]  BuilderAwareInterface.php
│   │   │   │   │   ├── [1.2K]  EnumNodeDefinition.php
│   │   │   │   │   ├── [5.6K]  ExprBuilder.php
│   │   │   │   │   ├── [ 753]  FloatNodeDefinition.php
│   │   │   │   │   ├── [ 764]  IntegerNodeDefinition.php
│   │   │   │   │   ├── [1.2K]  MergeBuilder.php
│   │   │   │   │   ├── [4.9K]  NodeBuilder.php
│   │   │   │   │   ├── [8.0K]  NodeDefinition.php
│   │   │   │   │   ├── [ 447]  NodeParentInterface.php
│   │   │   │   │   ├── [1.5K]  NormalizationBuilder.php
│   │   │   │   │   ├── [1.9K]  NumericNodeDefinition.php
│   │   │   │   │   ├── [1.1K]  ParentNodeDefinitionInterface.php
│   │   │   │   │   ├── [ 726]  ScalarNodeDefinition.php
│   │   │   │   │   ├── [1.5K]  TreeBuilder.php
│   │   │   │   │   ├── [ 963]  ValidationBuilder.php
│   │   │   │   │   └── [1.8K]  VariableNodeDefinition.php
│   │   │   │   ├── [ 594]  ConfigurableInterface.php
│   │   │   │   ├── [ 592]  ConfigurationInterface.php
│   │   │   │   ├── [1.3K]  Configuration.php
│   │   │   │   ├── [4.0K]  Configurator
│   │   │   │   │   └── [1.3K]  DefinitionConfigurator.php
│   │   │   │   ├── [4.0K]  Dumper
│   │   │   │   │   ├── [9.7K]  XmlReferenceDumper.php
│   │   │   │   │   └── [7.9K]  YamlReferenceDumper.php
│   │   │   │   ├── [2.6K]  EnumNode.php
│   │   │   │   ├── [4.0K]  Exception
│   │   │   │   │   ├── [ 581]  DuplicateKeyException.php
│   │   │   │   │   ├── [ 459]  Exception.php
│   │   │   │   │   ├── [ 593]  ForbiddenOverwriteException.php
│   │   │   │   │   ├── [1.1K]  InvalidConfigurationException.php
│   │   │   │   │   ├── [ 474]  InvalidDefinitionException.php
│   │   │   │   │   ├── [ 493]  InvalidTypeException.php
│   │   │   │   │   └── [ 540]  UnsetKeyException.php
│   │   │   │   ├── [1.2K]  FloatNode.php
│   │   │   │   ├── [1.0K]  IntegerNode.php
│   │   │   │   ├── [4.0K]  Loader
│   │   │   │   │   └── [3.1K]  DefinitionFileLoader.php
│   │   │   │   ├── [2.0K]  NodeInterface.php
│   │   │   │   ├── [1.8K]  NumericNode.php
│   │   │   │   ├── [2.5K]  Processor.php
│   │   │   │   ├── [ 11K]  PrototypedArrayNode.php
│   │   │   │   ├── [ 589]  PrototypeNodeInterface.php
│   │   │   │   ├── [1.6K]  ScalarNode.php
│   │   │   │   └── [3.3K]  VariableNode.php
│   │   │   ├── [4.0K]  Exception
│   │   │   │   ├── [ 844]  FileLoaderImportCircularReferenceException.php
│   │   │   │   ├── [ 802]  FileLocatorFileNotFoundException.php
│   │   │   │   ├── [3.9K]  LoaderLoadException.php
│   │   │   │   └── [ 334]  LogicException.php
│   │   │   ├── [1.1K]  FileLocatorInterface.php
│   │   │   ├── [2.6K]  FileLocator.php
│   │   │   ├── [1.0K]  LICENSE
│   │   │   ├── [4.0K]  Loader
│   │   │   │   ├── [1.2K]  DelegatingLoader.php
│   │   │   │   ├── [ 516]  DirectoryAwareLoaderInterface.php
│   │   │   │   ├── [6.3K]  FileLoader.php
│   │   │   │   ├── [ 681]  GlobFileLoader.php
│   │   │   │   ├── [1.0K]  LoaderInterface.php
│   │   │   │   ├── [1.8K]  Loader.php
│   │   │   │   ├── [ 680]  LoaderResolverInterface.php
│   │   │   │   ├── [1.5K]  LoaderResolver.php
│   │   │   │   └── [ 571]  ParamConfigurator.php
│   │   │   ├── [ 596]  README.md
│   │   │   ├── [4.0K]  Resource
│   │   │   │   ├── [6.8K]  ClassExistenceResource.php
│   │   │   │   ├── [1.5K]  ComposerResource.php
│   │   │   │   ├── [2.6K]  DirectoryResource.php
│   │   │   │   ├── [1.2K]  FileExistenceResource.php
│   │   │   │   ├── [1.4K]  FileResource.php
│   │   │   │   ├── [8.4K]  GlobResource.php
│   │   │   │   ├── [6.2K]  ReflectionClassResource.php
│   │   │   │   ├── [ 984]  ResourceInterface.php
│   │   │   │   ├── [1.3K]  SelfCheckingResourceChecker.php
│   │   │   │   └── [ 758]  SelfCheckingResourceInterface.php
│   │   │   ├── [ 985]  ResourceCheckerConfigCacheFactory.php
│   │   │   ├── [5.4K]  ResourceCheckerConfigCache.php
│   │   │   ├── [1.2K]  ResourceCheckerInterface.php
│   │   │   └── [4.0K]  Util
│   │   │       ├── [4.0K]  Exception
│   │   │       │   ├── [ 550]  InvalidXmlException.php
│   │   │       │   └── [ 466]  XmlParsingException.php
│   │   │       └── [9.2K]  XmlUtils.php
│   │   ├── [4.0K]  dependency-injection
│   │   │   ├── [2.9K]  Alias.php
│   │   │   ├── [4.0K]  Argument
│   │   │   │   ├── [ 944]  AbstractArgument.php
│   │   │   │   ├── [ 546]  ArgumentInterface.php
│   │   │   │   ├── [1.5K]  BoundArgument.php
│   │   │   │   ├── [ 780]  IteratorArgument.php
│   │   │   │   ├── [3.2K]  LazyClosure.php
│   │   │   │   ├── [ 934]  RewindableGenerator.php
│   │   │   │   ├── [1010]  ServiceClosureArgument.php
│   │   │   │   ├── [1.1K]  ServiceLocatorArgument.php
│   │   │   │   ├── [1.3K]  ServiceLocator.php
│   │   │   │   └── [3.3K]  TaggedIteratorArgument.php
│   │   │   ├── [4.0K]  Attribute
│   │   │   │   ├── [ 844]  AsAlias.php
│   │   │   │   ├── [1003]  AsDecorator.php
│   │   │   │   ├── [ 916]  AsTaggedItem.php
│   │   │   │   ├── [2.3K]  Autoconfigure.php
│   │   │   │   ├── [ 911]  AutoconfigureTag.php
│   │   │   │   ├── [2.1K]  AutowireCallable.php
│   │   │   │   ├── [ 432]  AutowireDecorated.php
│   │   │   │   ├── [2.2K]  AutowireInline.php
│   │   │   │   ├── [1.9K]  AutowireIterator.php
│   │   │   │   ├── [4.0K]  AutowireLocator.php
│   │   │   │   ├── [1.2K]  AutowireMethodOf.php
│   │   │   │   ├── [3.3K]  Autowire.php
│   │   │   │   ├── [ 817]  AutowireServiceClosure.php
│   │   │   │   ├── [ 487]  Exclude.php
│   │   │   │   ├── [ 477]  Lazy.php
│   │   │   │   ├── [1.9K]  TaggedIterator.php
│   │   │   │   ├── [1.9K]  TaggedLocator.php
│   │   │   │   ├── [2.3K]  Target.php
│   │   │   │   └── [ 791]  When.php
│   │   │   ├── [ 20K]  CHANGELOG.md
│   │   │   ├── [2.6K]  ChildDefinition.php
│   │   │   ├── [4.0K]  Compiler
│   │   │   │   ├── [ 10K]  AbstractRecursivePass.php
│   │   │   │   ├── [2.2K]  AliasDeprecatedPublicServicesPass.php
│   │   │   │   ├── [6.8K]  AnalyzeServiceReferencesPass.php
│   │   │   │   ├── [8.1K]  AttributeAutoconfigurationPass.php
│   │   │   │   ├── [1.4K]  AutoAliasServicePass.php
│   │   │   │   ├── [1.6K]  AutowireAsDecoratorPass.php
│   │   │   │   ├── [ 31K]  AutowirePass.php
│   │   │   │   ├── [3.0K]  AutowireRequiredMethodsPass.php
│   │   │   │   ├── [2.0K]  AutowireRequiredPropertiesPass.php
│   │   │   │   ├── [2.0K]  CheckAliasValidityPass.php
│   │   │   │   ├── [4.2K]  CheckArgumentsValidityPass.php
│   │   │   │   ├── [2.4K]  CheckCircularReferencesPass.php
│   │   │   │   ├── [4.9K]  CheckDefinitionValidityPass.php
│   │   │   │   ├── [4.6K]  CheckExceptionOnInvalidReferenceBehaviorPass.php
│   │   │   │   ├── [1.5K]  CheckReferenceValidityPass.php
│   │   │   │   ├── [ 12K]  CheckTypeDeclarationsPass.php
│   │   │   │   ├── [ 695]  CompilerPassInterface.php
│   │   │   │   ├── [2.6K]  Compiler.php
│   │   │   │   ├── [5.3K]  DecoratorServicePass.php
│   │   │   │   ├── [3.2K]  DefinitionErrorExceptionPass.php
│   │   │   │   ├── [ 861]  ExtensionCompilerPass.php
│   │   │   │   ├── [7.9K]  InlineServiceDefinitionsPass.php
│   │   │   │   ├── [8.5K]  MergeExtensionConfigurationPass.php
│   │   │   │   ├── [7.7K]  PassConfig.php
│   │   │   │   ├── [6.9K]  PriorityTaggedServiceTrait.php
│   │   │   │   ├── [3.7K]  RegisterAutoconfigureAttributesPass.php
│   │   │   │   ├── [3.0K]  RegisterEnvVarProcessorsPass.php
│   │   │   │   ├── [2.0K]  RegisterReverseContainerPass.php
│   │   │   │   ├── [6.7K]  RegisterServiceSubscribersPass.php
│   │   │   │   ├── [ 914]  RemoveAbstractDefinitionsPass.php
│   │   │   │   ├── [1.1K]  RemoveBuildParametersPass.php
│   │   │   │   ├── [1.1K]  RemovePrivateAliasesPass.php
│   │   │   │   ├── [2.8K]  RemoveUnusedDefinitionsPass.php
│   │   │   │   ├── [3.8K]  ReplaceAliasByActualDefinitionPass.php
│   │   │   │   ├── [4.5K]  ResolveAutowireInlineAttributesPass.php
│   │   │   │   ├── [ 10K]  ResolveBindingsPass.php
│   │   │   │   ├── [7.4K]  ResolveChildDefinitionsPass.php
│   │   │   │   ├── [1.5K]  ResolveClassPass.php
│   │   │   │   ├── [4.2K]  ResolveDecoratorStackPass.php
│   │   │   │   ├── [1.4K]  ResolveEnvPlaceholdersPass.php
│   │   │   │   ├── [1.2K]  ResolveFactoryClassPass.php
│   │   │   │   ├── [2.2K]  ResolveHotPathPass.php
│   │   │   │   ├── [7.0K]  ResolveInstanceofConditionalsPass.php
│   │   │   │   ├── [5.3K]  ResolveInvalidReferencesPass.php
│   │   │   │   ├── [5.9K]  ResolveNamedArgumentsPass.php
│   │   │   │   ├── [3.0K]  ResolveNoPreloadPass.php
│   │   │   │   ├── [3.1K]  ResolveParameterPlaceHoldersPass.php
│   │   │   │   ├── [2.7K]  ResolveReferencesToAliasesPass.php
│   │   │   │   ├── [1.7K]  ResolveServiceSubscribersPass.php
│   │   │   │   ├── [1.1K]  ResolveTaggedIteratorArgumentPass.php
│   │   │   │   ├── [4.7K]  ServiceLocatorTagPass.php
│   │   │   │   ├── [2.1K]  ServiceReferenceGraphEdge.php
│   │   │   │   ├── [2.1K]  ServiceReferenceGraphNode.php
│   │   │   │   ├── [2.6K]  ServiceReferenceGraph.php
│   │   │   │   └── [3.6K]  ValidateEnvPlaceholdersPass.php
│   │   │   ├── [1.3K]  composer.json
│   │   │   ├── [4.0K]  Config
│   │   │   │   ├── [1.2K]  ContainerParametersResourceChecker.php
│   │   │   │   └── [ 986]  ContainerParametersResource.php
│   │   │   ├── [ 59K]  ContainerBuilder.php
│   │   │   ├── [2.2K]  ContainerInterface.php
│   │   │   ├── [ 14K]  Container.php
│   │   │   ├── [ 20K]  Definition.php
│   │   │   ├── [4.0K]  Dumper
│   │   │   │   ├── [ 583]  DumperInterface.php
│   │   │   │   ├── [ 683]  Dumper.php
│   │   │   │   ├── [9.1K]  GraphvizDumper.php
│   │   │   │   ├── [ 95K]  PhpDumper.php
│   │   │   │   ├── [4.0K]  Preloader.php
│   │   │   │   ├── [ 18K]  XmlDumper.php
│   │   │   │   └── [ 14K]  YamlDumper.php
│   │   │   ├── [ 654]  EnvVarLoaderInterface.php
│   │   │   ├── [1.2K]  EnvVarProcessorInterface.php
│   │   │   ├── [ 13K]  EnvVarProcessor.php
│   │   │   ├── [4.0K]  Exception
│   │   │   │   ├── [ 371]  AutoconfigureFailedException.php
│   │   │   │   ├── [2.0K]  AutowiringFailedException.php
│   │   │   │   ├── [ 468]  BadMethodCallException.php
│   │   │   │   ├── [ 486]  EnvNotFoundException.php
│   │   │   │   ├── [ 777]  EnvParameterException.php
│   │   │   │   ├── [ 610]  ExceptionInterface.php
│   │   │   │   ├── [ 537]  InvalidArgumentException.php
│   │   │   │   ├── [1.3K]  InvalidParameterTypeException.php
│   │   │   │   ├── [ 444]  LogicException.php
│   │   │   │   ├── [ 462]  OutOfBoundsException.php
│   │   │   │   ├── [ 948]  ParameterCircularReferenceException.php
│   │   │   │   ├── [3.7K]  ParameterNotFoundException.php
│   │   │   │   ├── [ 507]  RuntimeException.php
│   │   │   │   ├── [1.0K]  ServiceCircularReferenceException.php
│   │   │   │   └── [1.8K]  ServiceNotFoundException.php
│   │   │   ├── [1.1K]  ExpressionLanguage.php
│   │   │   ├── [2.1K]  ExpressionLanguageProvider.php
│   │   │   ├── [4.0K]  Extension
│   │   │   │   ├── [2.1K]  AbstractExtension.php
│   │   │   │   ├── [1000]  ConfigurableExtensionInterface.php
│   │   │   │   ├── [ 808]  ConfigurationExtensionInterface.php
│   │   │   │   ├── [1.3K]  ExtensionInterface.php
│   │   │   │   ├── [4.0K]  Extension.php
│   │   │   │   ├── [2.9K]  ExtensionTrait.php
│   │   │   │   └── [ 567]  PrependExtensionInterface.php
│   │   │   ├── [4.0K]  LazyProxy
│   │   │   │   ├── [4.0K]  Instantiator
│   │   │   │   │   ├── [1.1K]  InstantiatorInterface.php
│   │   │   │   │   ├── [1.4K]  LazyServiceInstantiator.php
│   │   │   │   │   └── [ 824]  RealServiceInstantiator.php
│   │   │   │   └── [4.0K]  PhpDumper
│   │   │   │       ├── [1.2K]  DumperInterface.php
│   │   │   │       ├── [5.9K]  LazyServiceDumper.php
│   │   │   │       └── [ 987]  NullDumper.php
│   │   │   ├── [1.0K]  LICENSE
│   │   │   ├── [4.0K]  Loader
│   │   │   │   ├── [1.1K]  ClosureLoader.php
│   │   │   │   ├── [4.0K]  Configurator
│   │   │   │   │   ├── [4.0K]  AbstractConfigurator.php
│   │   │   │   │   ├── [3.0K]  AbstractServiceConfigurator.php
│   │   │   │   │   ├── [ 726]  AliasConfigurator.php
│   │   │   │   │   ├── [ 377]  ClosureReferenceConfigurator.php
│   │   │   │   │   ├── [6.2K]  ContainerConfigurator.php
│   │   │   │   │   ├── [2.3K]  DefaultsConfigurator.php
│   │   │   │   │   ├── [4.1K]  EnvConfigurator.php
│   │   │   │   │   ├── [1.2K]  FromCallableConfigurator.php
│   │   │   │   │   ├── [1.1K]  InlineServiceConfigurator.php
│   │   │   │   │   ├── [1.3K]  InstanceofConfigurator.php
│   │   │   │   │   ├── [1.3K]  ParametersConfigurator.php
│   │   │   │   │   ├── [2.7K]  PrototypeConfigurator.php
│   │   │   │   │   ├── [1.4K]  ReferenceConfigurator.php
│   │   │   │   │   ├── [2.1K]  ServiceConfigurator.php
│   │   │   │   │   ├── [7.0K]  ServicesConfigurator.php
│   │   │   │   │   └── [4.0K]  Traits
│   │   │   │   │       ├── [ 651]  AbstractTrait.php
│   │   │   │   │       ├── [ 940]  ArgumentTrait.php
│   │   │   │   │       ├── [ 808]  AutoconfigureTrait.php
│   │   │   │   │       ├── [ 574]  AutowireTrait.php
│   │   │   │   │       ├── [1.5K]  BindTrait.php
│   │   │   │   │       ├── [1.0K]  CallTrait.php
│   │   │   │   │       ├── [ 547]  ClassTrait.php
│   │   │   │   │       ├── [ 767]  ConfiguratorTrait.php
│   │   │   │   │       ├── [ 583]  ConstructorTrait.php
│   │   │   │   │       ├── [1.1K]  DecorateTrait.php
│   │   │   │   │       ├── [1.1K]  DeprecateTrait.php
│   │   │   │   │       ├── [1.3K]  FactoryTrait.php
│   │   │   │   │       ├── [ 569]  FileTrait.php
│   │   │   │   │       ├── [2.4K]  FromCallableTrait.php
│   │   │   │   │       ├── [ 821]  LazyTrait.php
│   │   │   │   │       ├── [1.4K]  ParentTrait.php
│   │   │   │   │       ├── [ 605]  PropertyTrait.php
│   │   │   │   │       ├── [ 658]  PublicTrait.php
│   │   │   │   │       ├── [ 573]  ShareTrait.php
│   │   │   │   │       ├── [ 665]  SyntheticTrait.php
│   │   │   │   │       └── [1.5K]  TagTrait.php
│   │   │   │   ├── [1.3K]  DirectoryLoader.php
│   │   │   │   ├── [ 16K]  FileLoader.php
│   │   │   │   ├── [ 850]  GlobFileLoader.php
│   │   │   │   ├── [3.2K]  IniFileLoader.php
│   │   │   │   ├── [8.3K]  PhpFileLoader.php
│   │   │   │   ├── [4.0K]  schema
│   │   │   │   │   └── [4.0K]  dic
│   │   │   │   │       └── [4.0K]  services
│   │   │   │   │           └── [ 17K]  services-1.0.xsd
│   │   │   │   ├── [1.7K]  UndefinedExtensionHandler.php
│   │   │   │   ├── [ 38K]  XmlFileLoader.php
│   │   │   │   └── [ 42K]  YamlFileLoader.php
│   │   │   ├── [4.0K]  ParameterBag
│   │   │   │   ├── [1.4K]  ContainerBagInterface.php
│   │   │   │   ├── [ 993]  ContainerBag.php
│   │   │   │   ├── [5.0K]  EnvPlaceholderParameterBag.php
│   │   │   │   ├── [1.7K]  FrozenParameterBag.php
│   │   │   │   ├── [2.3K]  ParameterBagInterface.php
│   │   │   │   └── [8.9K]  ParameterBag.php
│   │   │   ├── [ 601]  Parameter.php
│   │   │   ├── [ 579]  README.md
│   │   │   ├── [ 945]  Reference.php
│   │   │   ├── [2.4K]  ReverseContainer.php
│   │   │   ├── [5.4K]  ServiceLocator.php
│   │   │   ├── [ 592]  StaticEnvVarLoader.php
│   │   │   ├── [ 688]  TaggedContainerInterface.php
│   │   │   ├── [1.5K]  TypedReference.php
│   │   │   └── [ 692]  Variable.php
│   │   ├── [4.0K]  deprecation-contracts
│   │   │   ├── [ 157]  CHANGELOG.md
│   │   │   ├── [ 841]  composer.json
│   │   │   ├── [1014]  function.php
│   │   │   ├── [1.0K]  LICENSE
│   │   │   └── [1.2K]  README.md
│   │   ├── [4.0K]  error-handler
│   │   │   ├── [2.0K]  BufferingLogger.php
│   │   │   ├── [1007]  CHANGELOG.md
│   │   │   ├── [1.1K]  composer.json
│   │   │   ├── [ 48K]  DebugClassLoader.php
│   │   │   ├── [1.1K]  Debug.php
│   │   │   ├── [4.0K]  Error
│   │   │   │   ├── [ 816]  ClassNotFoundError.php
│   │   │   │   ├── [2.7K]  FatalError.php
│   │   │   │   ├── [ 333]  OutOfMemoryError.php
│   │   │   │   ├── [ 820]  UndefinedFunctionError.php
│   │   │   │   └── [ 818]  UndefinedMethodError.php
│   │   │   ├── [4.0K]  ErrorEnhancer
│   │   │   │   ├── [6.7K]  ClassNotFoundErrorEnhancer.php
│   │   │   │   ├── [ 506]  ErrorEnhancerInterface.php
│   │   │   │   ├── [3.0K]  UndefinedFunctionErrorEnhancer.php
│   │   │   │   └── [2.1K]  UndefinedMethodErrorEnhancer.php
│   │   │   ├── [ 27K]  ErrorHandler.php
│   │   │   ├── [4.0K]  ErrorRenderer
│   │   │   │   ├── [1.3K]  CliErrorRenderer.php
│   │   │   │   ├── [1.1K]  ErrorRendererInterface.php
│   │   │   │   ├── [3.1K]  FileLinkFormatter.php
│   │   │   │   ├── [ 23K]  HtmlErrorRenderer.php
│   │   │   │   └── [3.2K]  SerializerErrorRenderer.php
│   │   │   ├── [4.0K]  Exception
│   │   │   │   ├── [ 12K]  FlattenException.php
│   │   │   │   └── [1.3K]  SilencedErrorContext.php
│   │   │   ├── [4.0K]  Internal
│   │   │   │   └── [ 58K]  TentativeTypes.php
│   │   │   ├── [1.0K]  LICENSE
│   │   │   ├── [1.3K]  README.md
│   │   │   ├── [4.0K]  Resources
│   │   │   │   ├── [4.0K]  assets
│   │   │   │   │   ├── [4.0K]  css
│   │   │   │   │   │   ├── [ 275]  error.css
│   │   │   │   │   │   ├── [ 17K]  exception.css
│   │   │   │   │   │   └── [2.7K]  exception_full.css
│   │   │   │   │   ├── [4.0K]  images
│   │   │   │   │   │   ├── [ 276]  chevron-right.svg
│   │   │   │   │   │   ├── [1.2K]  favicon.png.base64
│   │   │   │   │   │   ├── [ 913]  icon-book.svg
│   │   │   │   │   │   ├── [ 265]  icon-copy.svg
│   │   │   │   │   │   ├── [ 432]  icon-minus-square-o.svg
│   │   │   │   │   │   ├── [ 337]  icon-minus-square.svg
│   │   │   │   │   │   ├── [ 526]  icon-plus-square-o.svg
│   │   │   │   │   │   ├── [ 442]  icon-plus-square.svg
│   │   │   │   │   │   ├── [ 634]  icon-support.svg
│   │   │   │   │   │   ├── [8.0K]  symfony-ghost.svg.php
│   │   │   │   │   │   └── [ 942]  symfony-logo.svg
│   │   │   │   │   └── [4.0K]  js
│   │   │   │   │       └── [ 14K]  exception.js
│   │   │   │   ├── [4.0K]  bin
│   │   │   │   │   ├── [2.0K]  extract-tentative-return-types.php
│   │   │   │   │   └── [3.6K]  patch-type-declarations
│   │   │   │   └── [4.0K]  views
│   │   │   │       ├── [ 819]  error.html.php
│   │   │   │       ├── [1.8K]  exception_full.html.php
│   │   │   │       ├── [4.4K]  exception.html.php
│   │   │   │       ├── [2.1K]  logs.html.php
│   │   │   │       ├── [2.5K]  trace.html.php
│   │   │   │       ├── [2.7K]  traces.html.php
│   │   │   │       └── [2.0K]  traces_text.html.php
│   │   │   └── [ 865]  ThrowableUtils.php
│   │   ├── [4.0K]  event-dispatcher
│   │   │   ├── [4.0K]  Attribute
│   │   │   │   └── [1.1K]  AsEventListener.php
│   │   │   ├── [2.8K]  CHANGELOG.md
│   │   │   ├── [1.4K]  composer.json
│   │   │   ├── [4.0K]  Debug
│   │   │   │   ├── [ 12K]  TraceableEventDispatcher.php
│   │   │   │   └── [4.5K]  WrappedListener.php
│   │   │   ├── [4.0K]  DependencyInjection
│   │   │   │   ├── [1.1K]  AddEventAliasesPass.php
│   │   │   │   └── [8.2K]  RegisterListenersPass.php
│   │   │   ├── [2.1K]  EventDispatcherInterface.php
│   │   │   ├── [8.7K]  EventDispatcher.php
│   │   │   ├── [1.7K]  EventSubscriberInterface.php
│   │   │   ├── [3.4K]  GenericEvent.php
│   │   │   ├── [1.9K]  ImmutableEventDispatcher.php
│   │   │   ├── [1.0K]  LICENSE
│   │   │   └── [ 599]  README.md
│   │   ├── [4.0K]  event-dispatcher-contracts
│   │   │   ├── [ 157]  CHANGELOG.md
│   │   │   ├── [ 986]  composer.json
│   │   │   ├── [1.0K]  EventDispatcherInterface.php
│   │   │   ├── [1.4K]  Event.php
│   │   │   ├── [1.0K]  LICENSE
│   │   │   └── [ 346]  README.md
│   │   ├── [4.0K]  filesystem
│   │   │   ├── [1.6K]  CHANGELOG.md
│   │   │   ├── [ 840]  composer.json
│   │   │   ├── [4.0K]  Exception
│   │   │   │   ├── [ 464]  ExceptionInterface.php
│   │   │   │   ├── [ 972]  FileNotFoundException.php
│   │   │   │   ├── [ 463]  InvalidArgumentException.php
│   │   │   │   ├── [ 644]  IOExceptionInterface.php
│   │   │   │   ├── [ 923]  IOException.php
│   │   │   │   └── [ 426]  RuntimeException.php
│   │   │   ├── [ 29K]  Filesystem.php
│   │   │   ├── [1.0K]  LICENSE
│   │   │   ├── [ 25K]  Path.php
│   │   │   └── [ 493]  README.md
│   │   ├── [4.0K]  finder
│   │   │   ├── [2.5K]  CHANGELOG.md
│   │   │   ├── [4.0K]  Comparator
│   │   │   │   ├── [1.4K]  Comparator.php
│   │   │   │   ├── [1.4K]  DateComparator.php
│   │   │   │   └── [2.5K]  NumberComparator.php
│   │   │   ├── [ 766]  composer.json
│   │   │   ├── [4.0K]  Exception
│   │   │   │   ├── [ 427]  AccessDeniedException.php
│   │   │   │   └── [ 419]  DirectoryNotFoundException.php
│   │   │   ├── [ 24K]  Finder.php
│   │   │   ├── [2.9K]  Gitignore.php
│   │   │   ├── [3.5K]  Glob.php
│   │   │   ├── [4.0K]  Iterator
│   │   │   │   ├── [1.5K]  CustomFilterIterator.php
│   │   │   │   ├── [1.4K]  DateRangeFilterIterator.php
│   │   │   │   ├── [1.3K]  DepthRangeFilterIterator.php
│   │   │   │   ├── [3.3K]  ExcludeDirectoryFilterIterator.php
│   │   │   │   ├── [1.4K]  FilecontentFilterIterator.php
│   │   │   │   ├── [1.1K]  FilenameFilterIterator.php
│   │   │   │   ├── [1.4K]  FileTypeFilterIterator.php
│   │   │   │   ├── [ 686]  LazyIterator.php
│   │   │   │   ├── [3.1K]  MultiplePcreFilterIterator.php
│   │   │   │   ├── [1.4K]  PathFilterIterator.php
│   │   │   │   ├── [4.0K]  RecursiveDirectoryIterator.php
│   │   │   │   ├── [1.3K]  SizeRangeFilterIterator.php
│   │   │   │   ├── [4.5K]  SortableIterator.php
│   │   │   │   └── [4.6K]  VcsIgnoredFilterIterator.php
│   │   │   ├── [1.0K]  LICENSE
│   │   │   ├── [ 495]  README.md
│   │   │   └── [1.8K]  SplFileInfo.php
│   │   ├── [4.0K]  framework-bundle
│   │   │   ├── [4.0K]  CacheWarmer
│   │   │   │   ├── [2.5K]  AbstractPhpFileCacheWarmer.php
│   │   │   │   ├── [1.3K]  CachePoolClearerCacheWarmer.php
│   │   │   │   ├── [3.6K]  ConfigBuilderCacheWarmer.php
│   │   │   │   ├── [1.7K]  RouterCacheWarmer.php
│   │   │   │   ├── [2.6K]  SerializerCacheWarmer.php
│   │   │   │   ├── [1.6K]  TranslationsCacheWarmer.php
│   │   │   │   └── [3.0K]  ValidatorCacheWarmer.php
│   │   │   ├── [ 45K]  CHANGELOG.md
│   │   │   ├── [4.0K]  Command
│   │   │   │   ├── [5.3K]  AboutCommand.php
│   │   │   │   ├── [6.4K]  AbstractConfigCommand.php
│   │   │   │   ├── [9.8K]  AssetsInstallCommand.php
│   │   │   │   ├── [2.5K]  BuildDebugContainerTrait.php
│   │   │   │   ├── [9.6K]  CacheClearCommand.php
│   │   │   │   ├── [4.9K]  CachePoolClearCommand.php
│   │   │   │   ├── [2.7K]  CachePoolDeleteCommand.php
│   │   │   │   ├── [3.7K]  CachePoolInvalidateTagsCommand.php
│   │   │   │   ├── [1.4K]  CachePoolListCommand.php
│   │   │   │   ├── [1.6K]  CachePoolPruneCommand.php
│   │   │   │   ├── [2.7K]  CacheWarmupCommand.php
│   │   │   │   ├── [ 10K]  ConfigDebugCommand.php
│   │   │   │   ├── [6.7K]  ConfigDumpReferenceCommand.php
│   │   │   │   ├── [ 15K]  ContainerDebugCommand.php
│   │   │   │   ├── [4.7K]  ContainerLintCommand.php
│   │   │   │   ├── [7.4K]  DebugAutowiringCommand.php
│   │   │   │   ├── [5.6K]  EventDispatcherDebugCommand.php
│   │   │   │   ├── [6.0K]  RouterDebugCommand.php
│   │   │   │   ├── [4.0K]  RouterMatchCommand.php
│   │   │   │   ├── [3.1K]  SecretsDecryptToLocalCommand.php
│   │   │   │   ├── [2.1K]  SecretsEncryptFromLocalCommand.php
│   │   │   │   ├── [3.5K]  SecretsGenerateKeysCommand.php
│   │   │   │   ├── [3.2K]  SecretsListCommand.php
│   │   │   │   ├── [3.1K]  SecretsRemoveCommand.php
│   │   │   │   ├── [2.2K]  SecretsRevealCommand.php
│   │   │   │   ├── [5.1K]  SecretsSetCommand.php
│   │   │   │   ├── [ 14K]  TranslationDebugCommand.php
│   │   │   │   ├── [ 17K]  TranslationUpdateCommand.php
│   │   │   │   ├── [4.7K]  WorkflowDumpCommand.php
│   │   │   │   ├── [1.5K]  XliffLintCommand.php
│   │   │   │   └── [1.5K]  YamlLintCommand.php
│   │   │   ├── [4.1K]  composer.json
│   │   │   ├── [4.0K]  Console
│   │   │   │   ├── [7.3K]  Application.php
│   │   │   │   ├── [4.0K]  Descriptor
│   │   │   │   │   ├── [ 14K]  Descriptor.php
│   │   │   │   │   ├── [ 17K]  JsonDescriptor.php
│   │   │   │   │   ├── [ 18K]  MarkdownDescriptor.php
│   │   │   │   │   ├── [ 28K]  TextDescriptor.php
│   │   │   │   │   └── [ 26K]  XmlDescriptor.php
│   │   │   │   └── [4.0K]  Helper
│   │   │   │       └── [1.2K]  DescriptorHelper.php
│   │   │   ├── [4.0K]  Controller
│   │   │   │   ├── [ 17K]  AbstractController.php
│   │   │   │   ├── [1.0K]  ControllerResolver.php
│   │   │   │   ├── [7.2K]  RedirectController.php
│   │   │   │   └── [2.3K]  TemplateController.php
│   │   │   ├── [4.0K]  DataCollector
│   │   │   │   ├── [ 701]  AbstractDataCollector.php
│   │   │   │   ├── [1.0K]  RouterDataCollector.php
│   │   │   │   └── [ 568]  TemplateAwareDataCollectorInterface.php
│   │   │   ├── [4.0K]  DependencyInjection
│   │   │   │   ├── [4.0K]  Compiler
│   │   │   │   │   ├── [1.1K]  AddDebugLogProcessorPass.php
│   │   │   │   │   ├── [1.6K]  AssetsContextPass.php
│   │   │   │   │   ├── [1.2K]  ContainerBuilderDebugDumpPass.php
│   │   │   │   │   ├── [1.2K]  ErrorLoggerCompilerPass.php
│   │   │   │   │   ├── [2.3K]  ProfilerPass.php
│   │   │   │   │   ├── [1.2K]  RemoveUnusedSessionMarshallingHandlerPass.php
│   │   │   │   │   ├── [2.3K]  TestServiceContainerRealRefPass.php
│   │   │   │   │   ├── [2.2K]  TestServiceContainerWeakRefPass.php
│   │   │   │   │   └── [4.4K]  UnusedTagsPass.php
│   │   │   │   ├── [138K]  Configuration.php
│   │   │   │   ├── [161K]  FrameworkExtension.php
│   │   │   │   └── [1.1K]  VirtualRequestStackPass.php
│   │   │   ├── [4.0K]  EventListener
│   │   │   │   ├── [5.1K]  ConsoleProfilerListener.php
│   │   │   │   └── [2.5K]  SuggestMissingPackageSubscriber.php
│   │   │   ├── [ 11K]  FrameworkBundle.php
│   │   │   ├── [4.0K]  HttpCache
│   │   │   │   └── [2.5K]  HttpCache.php
│   │   │   ├── [4.0K]  Kernel
│   │   │   │   └── [8.0K]  MicroKernelTrait.php
│   │   │   ├── [7.1K]  KernelBrowser.php
│   │   │   ├── [1.0K]  LICENSE
│   │   │   ├── [ 545]  README.md
│   │   │   ├── [4.0K]  Resources
│   │   │   │   ├── [4.0K]  bin
│   │   │   │   │   └── [ 851]  check-unused-known-tags.php
│   │   │   │   └── [4.0K]  config
│   │   │   │       ├── [ 11K]  asset_mapper.php
│   │   │   │       ├── [2.7K]  assets.php
│   │   │   │       ├── [1.3K]  cache_debug.php
│   │   │   │       ├── [9.2K]  cache.php
│   │   │   │       ├── [4.2K]  collectors.php
│   │   │   │       ├── [ 16K]  console.php
│   │   │   │       ├── [1.9K]  debug.php
│   │   │   │       ├── [1.5K]  debug_prod.php
│   │   │   │       ├── [1.3K]  error_renderer.php
│   │   │   │       ├── [ 710]  esi.php
│   │   │   │       ├── [ 959]  form_csrf.php
│   │   │   │       ├── [1.5K]  form_debug.php
│   │   │   │       ├── [6.8K]  form.php
│   │   │   │       ├── [ 643]  fragment_listener.php
│   │   │   │       ├── [2.8K]  fragment_renderer.php
│   │   │   │       ├── [1.0K]  html_sanitizer.php
│   │   │   │       ├── [ 758]  http_client_debug.php
│   │   │   │       ├── [3.7K]  http_client.php
│   │   │   │       ├── [ 692]  identity_translator.php
│   │   │   │       ├── [1.0K]  lock.php
│   │   │   │       ├── [ 793]  mailer_debug.php
│   │   │   │       ├── [3.1K]  mailer.php
│   │   │   │       ├── [3.3K]  mailer_transports.php
│   │   │   │       ├── [3.7K]  mailer_webhook.php
│   │   │   │       ├── [ 749]  messenger_debug.php
│   │   │   │       ├── [9.6K]  messenger.php
│   │   │   │       ├── [ 768]  mime_type.php
│   │   │   │       ├── [ 740]  notifier_debug.php
│   │   │   │       ├── [5.2K]  notifier.php
│   │   │   │       ├── [7.1K]  notifier_transports.php
│   │   │   │       ├── [ 894]  notifier_webhook.php
│   │   │   │       ├── [ 627]  process.php
│   │   │   │       ├── [2.0K]  profiling.php
│   │   │   │       ├── [1.0K]  property_access.php
│   │   │   │       ├── [2.5K]  property_info.php
│   │   │   │       ├── [ 778]  rate_limiter.php
│   │   │   │       ├── [ 710]  remote_event.php
│   │   │   │       ├── [ 658]  request.php
│   │   │   │       ├── [4.0K]  routing
│   │   │   │       │   ├── [ 508]  errors.xml
│   │   │   │       │   └── [ 457]  webhook.xml
│   │   │   │       ├── [8.2K]  routing.php
│   │   │   │       ├── [1.4K]  scheduler.php
│   │   │   │       ├── [4.0K]  schema
│   │   │   │       │   └── [ 47K]  symfony-1.0.xsd
│   │   │   │       ├── [1.2K]  secrets.php
│   │   │   │       ├── [1.9K]  security_csrf.php
│   │   │   │       ├── [ 716]  semaphore.php
│   │   │   │       ├── [1021]  serializer_debug.php
│   │   │   │       ├── [ 10K]  serializer.php
│   │   │   │       ├── [9.8K]  services.php
│   │   │   │       ├── [4.6K]  session.php
│   │   │   │       ├── [ 710]  ssi.php
│   │   │   │       ├── [1.9K]  test.php
│   │   │   │       ├── [1020]  translation_debug.php
│   │   │   │       ├── [8.4K]  translation.php
│   │   │   │       ├── [3.0K]  translation_providers.php
│   │   │   │       ├── [2.4K]  type_info.php
│   │   │   │       ├── [1.6K]  uid.php
│   │   │   │       ├── [1.1K]  validator_debug.php
│   │   │   │       ├── [5.3K]  validator.php
│   │   │   │       ├── [1.9K]  webhook.php
│   │   │   │       ├── [ 906]  web_link.php
│   │   │   │       ├── [7.1K]  web.php
│   │   │   │       ├── [ 896]  workflow_debug.php
│   │   │   │       └── [1.7K]  workflow.php
│   │   │   ├── [4.0K]  Routing
│   │   │   │   ├── [4.0K]  Attribute
│   │   │   │   │   └── [1.5K]  AsRoutingConditionService.php
│   │   │   │   ├── [1.7K]  AttributeRouteControllerLoader.php
│   │   │   │   ├── [3.2K]  DelegatingLoader.php
│   │   │   │   ├── [1.1K]  RedirectableCompiledUrlMatcher.php
│   │   │   │   ├── [ 379]  RouteLoaderInterface.php
│   │   │   │   └── [7.1K]  Router.php
│   │   │   ├── [4.0K]  Secrets
│   │   │   │   ├── [1.2K]  AbstractVault.php
│   │   │   │   ├── [3.0K]  DotenvVault.php
│   │   │   │   └── [8.7K]  SodiumVault.php
│   │   │   ├── [4.0K]  Test
│   │   │   │   ├── [8.5K]  BrowserKitAssertionsTrait.php
│   │   │   │   ├── [6.4K]  DomCrawlerAssertionsTrait.php
│   │   │   │   ├── [5.2K]  HttpClientAssertionsTrait.php
│   │   │   │   ├── [4.4K]  KernelTestCase.php
│   │   │   │   ├── [5.5K]  MailerAssertionsTrait.php
│   │   │   │   ├── [3.9K]  NotificationAssertionsTrait.php
│   │   │   │   ├── [1.3K]  TestBrowserToken.php
│   │   │   │   ├── [3.8K]  TestContainer.php
│   │   │   │   ├── [ 424]  WebTestAssertionsTrait.php
│   │   │   │   └── [1.9K]  WebTestCase.php
│   │   │   └── [4.0K]  Translation
│   │   │       └── [5.6K]  Translator.php
│   │   ├── [4.0K]  http-foundation
│   │   │   ├── [3.2K]  AcceptHeaderItem.php
│   │   │   ├── [3.4K]  AcceptHeader.php
│   │   │   ├── [ 13K]  BinaryFileResponse.php
│   │   │   ├── [ 873]  ChainRequestMatcher.php
│   │   │   ├── [ 20K]  CHANGELOG.md
│   │   │   ├── [1.2K]  composer.json
│   │   │   ├── [ 12K]  Cookie.php
│   │   │   ├── [4.0K]  Exception
│   │   │   │   ├── [ 450]  BadRequestException.php
│   │   │   │   ├── [ 526]  ConflictingHeadersException.php
│   │   │   │   ├── [ 345]  ExceptionInterface.php
│   │   │   │   ├── [ 528]  JsonException.php
│   │   │   │   ├── [ 434]  LogicException.php
│   │   │   │   ├── [ 484]  RequestExceptionInterface.php
│   │   │   │   ├── [ 843]  SessionNotFoundException.php
│   │   │   │   ├── [ 528]  SuspiciousOperationException.php
│   │   │   │   └── [ 362]  UnexpectedValueException.php
│   │   │   ├── [4.0K]  File
│   │   │   │   ├── [4.0K]  Exception
│   │   │   │   │   ├── [ 602]  AccessDeniedException.php
│   │   │   │   │   ├── [ 488]  CannotWriteFileException.php
│   │   │   │   │   ├── [ 485]  ExtensionFileException.php
│   │   │   │   │   ├── [ 466]  FileException.php
│   │   │   │   │   ├── [ 586]  FileNotFoundException.php
│   │   │   │   │   ├── [ 484]  FormSizeFileException.php
│   │   │   │   │   ├── [ 482]  IniSizeFileException.php
│   │   │   │   │   ├── [ 476]  NoFileException.php
│   │   │   │   │   ├── [ 485]  NoTmpDirFileException.php
│   │   │   │   │   ├── [ 481]  PartialFileException.php
│   │   │   │   │   ├── [ 553]  UnexpectedTypeException.php
│   │   │   │   │   └── [ 461]  UploadException.php
│   │   │   │   ├── [4.3K]  File.php
│   │   │   │   ├── [ 479]  Stream.php
│   │   │   │   └── [ 10K]  UploadedFile.php
│   │   │   ├── [3.8K]  FileBag.php
│   │   │   ├── [6.9K]  HeaderBag.php
│   │   │   ├── [9.1K]  HeaderUtils.php
│   │   │   ├── [4.6K]  InputBag.php
│   │   │   ├── [7.4K]  IpUtils.php
│   │   │   ├── [6.5K]  JsonResponse.php
│   │   │   ├── [1.0K]  LICENSE
│   │   │   ├── [6.9K]  ParameterBag.php
│   │   │   ├── [4.0K]  RateLimiter
│   │   │   │   ├── [2.4K]  AbstractRequestRateLimiter.php
│   │   │   │   ├── [1.1K]  PeekableRequestRateLimiterInterface.php
│   │   │   │   └── [ 734]  RequestRateLimiterInterface.php
│   │   │   ├── [ 526]  README.md
│   │   │   ├── [2.6K]  RedirectResponse.php
│   │   │   ├── [4.0K]  RequestMatcher
│   │   │   │   ├── [1.1K]  AttributesRequestMatcher.php
│   │   │   │   ├── [1.3K]  ExpressionRequestMatcher.php
│   │   │   │   ├── [1.3K]  HeaderRequestMatcher.php
│   │   │   │   ├── [ 802]  HostRequestMatcher.php
│   │   │   │   ├── [1.2K]  IpsRequestMatcher.php
│   │   │   │   ├── [ 696]  IsJsonRequestMatcher.php
│   │   │   │   ├── [1.3K]  MethodRequestMatcher.php
│   │   │   │   ├── [ 819]  PathRequestMatcher.php
│   │   │   │   ├── [ 749]  PortRequestMatcher.php
│   │   │   │   ├── [1.3K]  QueryParameterRequestMatcher.php
│   │   │   │   └── [1.2K]  SchemeRequestMatcher.php
│   │   │   ├── [ 621]  RequestMatcherInterface.php
│   │   │   ├── [ 68K]  Request.php
│   │   │   ├── [2.6K]  RequestStack.php
│   │   │   ├── [7.7K]  ResponseHeaderBag.php
│   │   │   ├── [ 39K]  Response.php
│   │   │   ├── [3.9K]  ServerBag.php
│   │   │   ├── [4.0K]  Session
│   │   │   │   ├── [4.0K]  Attribute
│   │   │   │   │   ├── [1.1K]  AttributeBagInterface.php
│   │   │   │   │   └── [2.6K]  AttributeBag.php
│   │   │   │   ├── [4.0K]  Flash
│   │   │   │   │   ├── [3.0K]  AutoExpireFlashBag.php
│   │   │   │   │   ├── [1.7K]  FlashBagInterface.php
│   │   │   │   │   └── [2.3K]  FlashBag.php
│   │   │   │   ├── [ 535]  FlashBagAwareSessionInterface.php
│   │   │   │   ├── [ 820]  SessionBagInterface.php
│   │   │   │   ├── [2.0K]  SessionBagProxy.php
│   │   │   │   ├── [ 436]  SessionFactoryInterface.php
│   │   │   │   ├── [1.3K]  SessionFactory.php
│   │   │   │   ├── [3.6K]  SessionInterface.php
│   │   │   │   ├── [5.7K]  Session.php
│   │   │   │   ├── [1.6K]  SessionUtils.php
│   │   │   │   └── [4.0K]  Storage
│   │   │   │       ├── [4.0K]  Handler
│   │   │   │       │   ├── [4.0K]  AbstractSessionHandler.php
│   │   │   │       │   ├── [ 898]  IdentityMarshaller.php
│   │   │   │       │   ├── [2.1K]  MarshallingSessionHandler.php
│   │   │   │       │   ├── [3.2K]  MemcachedSessionHandler.php
│   │   │   │       │   ├── [3.2K]  MigratingSessionHandler.php
│   │   │   │       │   ├── [6.0K]  MongoDbSessionHandler.php
│   │   │   │       │   ├── [1.9K]  NativeFileSessionHandler.php
│   │   │   │       │   ├── [1.2K]  NullSessionHandler.php
│   │   │   │       │   ├── [ 38K]  PdoSessionHandler.php
│   │   │   │       │   ├── [2.9K]  RedisSessionHandler.php
│   │   │   │       │   ├── [4.0K]  SessionHandlerFactory.php
│   │   │   │       │   └── [2.5K]  StrictSessionHandler.php
│   │   │   │       ├── [3.3K]  MetadataBag.php
│   │   │   │       ├── [4.4K]  MockArraySessionStorage.php
│   │   │   │       ├── [1.1K]  MockFileSessionStorageFactory.php
│   │   │   │       ├── [3.8K]  MockFileSessionStorage.php
│   │   │   │       ├── [1.5K]  NativeSessionStorageFactory.php
│   │   │   │       ├── [ 13K]  NativeSessionStorage.php
│   │   │   │       ├── [1.3K]  PhpBridgeSessionStorageFactory.php
│   │   │   │       ├── [1.4K]  PhpBridgeSessionStorage.php
│   │   │   │       ├── [4.0K]  Proxy
│   │   │   │       │   ├── [2.0K]  AbstractProxy.php
│   │   │   │       │   └── [2.3K]  SessionHandlerProxy.php
│   │   │   │       ├── [ 602]  SessionStorageFactoryInterface.php
│   │   │   │       └── [3.7K]  SessionStorageInterface.php
│   │   │   ├── [5.6K]  StreamedJsonResponse.php
│   │   │   ├── [3.0K]  StreamedResponse.php
│   │   │   ├── [4.0K]  Test
│   │   │   │   └── [4.0K]  Constraint
│   │   │   │       ├── [1.1K]  RequestAttributeValueSame.php
│   │   │   │       ├── [2.0K]  ResponseCookieValueSame.php
│   │   │   │       ├── [1.6K]  ResponseFormatSame.php
│   │   │   │       ├── [1.8K]  ResponseHasCookie.php
│   │   │   │       ├── [1.0K]  ResponseHasHeader.php
│   │   │   │       ├── [1.6K]  ResponseHeaderLocationSame.php
│   │   │   │       ├── [1.2K]  ResponseHeaderSame.php
│   │   │   │       ├── [1.3K]  ResponseIsRedirected.php
│   │   │   │       ├── [1.3K]  ResponseIsSuccessful.php
│   │   │   │       ├── [1.3K]  ResponseIsUnprocessable.php
│   │   │   │       └── [1.3K]  ResponseStatusCodeSame.php
│   │   │   ├── [5.9K]  UriSigner.php
│   │   │   └── [3.1K]  UrlHelper.php
│   │   ├── [4.0K]  http-kernel
│   │   │   ├── [4.0K]  Attribute
│   │   │   │   ├── [ 669]  AsController.php
│   │   │   │   ├── [ 608]  AsTargetedValueResolver.php
│   │   │   │   ├── [3.3K]  Cache.php
│   │   │   │   ├── [1.2K]  MapDateTime.php
│   │   │   │   ├── [1.8K]  MapQueryParameter.php
│   │   │   │   ├── [1.8K]  MapQueryString.php
│   │   │   │   ├── [2.1K]  MapRequestPayload.php
│   │   │   │   ├── [1.0K]  MapUploadedFile.php
│   │   │   │   ├── [ 967]  ValueResolver.php
│   │   │   │   ├── [ 790]  WithHttpStatus.php
│   │   │   │   └── [ 840]  WithLogLevel.php
│   │   │   ├── [4.0K]  Bundle
│   │   │   │   ├── [1.9K]  AbstractBundle.php
│   │   │   │   ├── [2.2K]  BundleExtension.php
│   │   │   │   ├── [1.6K]  BundleInterface.php
│   │   │   │   └── [4.3K]  Bundle.php
│   │   │   ├── [4.0K]  CacheClearer
│   │   │   │   ├── [ 519]  CacheClearerInterface.php
│   │   │   │   ├── [ 778]  ChainCacheClearer.php
│   │   │   │   └── [1.6K]  Psr6CacheClearer.php
│   │   │   ├── [4.0K]  CacheWarmer
│   │   │   │   ├── [4.4K]  CacheWarmerAggregate.php
│   │   │   │   ├── [ 751]  CacheWarmerInterface.php
│   │   │   │   ├── [ 884]  CacheWarmer.php
│   │   │   │   └── [ 826]  WarmableInterface.php
│   │   │   ├── [ 22K]  CHANGELOG.md
│   │   │   ├── [2.7K]  composer.json
│   │   │   ├── [4.0K]  Config
│   │   │   │   └── [1.0K]  FileLocator.php
│   │   │   ├── [4.0K]  Controller
│   │   │   │   ├── [4.0K]  ArgumentResolver
│   │   │   │   │   ├── [2.4K]  BackedEnumValueResolver.php
│   │   │   │   │   ├── [2.8K]  DateTimeValueResolver.php
│   │   │   │   │   ├── [1.0K]  DefaultValueResolver.php
│   │   │   │   │   ├── [2.1K]  NotTaggedControllerValueResolver.php
│   │   │   │   │   ├── [4.7K]  QueryParameterValueResolver.php
│   │   │   │   │   ├── [ 945]  RequestAttributeValueResolver.php
│   │   │   │   │   ├── [ 11K]  RequestPayloadValueResolver.php
│   │   │   │   │   ├── [1.3K]  RequestValueResolver.php
│   │   │   │   │   ├── [2.5K]  ServiceValueResolver.php
│   │   │   │   │   ├── [1.1K]  SessionValueResolver.php
│   │   │   │   │   ├── [1.2K]  TraceableValueResolver.php
│   │   │   │   │   ├── [1.3K]  UidValueResolver.php
│   │   │   │   │   └── [1.2K]  VariadicValueResolver.php
│   │   │   │   ├── [ 838]  ArgumentResolverInterface.php
│   │   │   │   ├── [6.1K]  ArgumentResolver.php
│   │   │   │   ├── [2.1K]  ContainerControllerResolver.php
│   │   │   │   ├── [1.3K]  ControllerReference.php
│   │   │   │   ├── [1.3K]  ControllerResolverInterface.php
│   │   │   │   ├── [9.5K]  ControllerResolver.php
│   │   │   │   ├── [1.8K]  ErrorController.php
│   │   │   │   ├── [1009]  TraceableArgumentResolver.php
│   │   │   │   ├── [ 930]  TraceableControllerResolver.php
│   │   │   │   └── [ 713]  ValueResolverInterface.php
│   │   │   ├── [4.0K]  ControllerMetadata
│   │   │   │   ├── [ 619]  ArgumentMetadataFactoryInterface.php
│   │   │   │   ├── [2.3K]  ArgumentMetadataFactory.php
│   │   │   │   └── [3.5K]  ArgumentMetadata.php
│   │   │   ├── [4.0K]  DataCollector
│   │   │   │   ├── [ 832]  AjaxDataCollector.php
│   │   │   │   ├── [7.0K]  ConfigDataCollector.php
│   │   │   │   ├── [ 897]  DataCollectorInterface.php
│   │   │   │   ├── [3.0K]  DataCollector.php
│   │   │   │   ├── [ 11K]  DumpDataCollector.php
│   │   │   │   ├── [4.2K]  EventDataCollector.php
│   │   │   │   ├── [1.6K]  ExceptionDataCollector.php
│   │   │   │   ├── [ 545]  LateDataCollectorInterface.php
│   │   │   │   ├── [ 11K]  LoggerDataCollector.php
│   │   │   │   ├── [2.2K]  MemoryDataCollector.php
│   │   │   │   ├── [ 16K]  RequestDataCollector.php
│   │   │   │   ├── [2.3K]  RouterDataCollector.php
│   │   │   │   └── [3.3K]  TimeDataCollector.php
│   │   │   ├── [4.0K]  Debug
│   │   │   │   ├── [3.4K]  ErrorHandlerConfigurator.php
│   │   │   │   ├── [3.3K]  TraceableEventDispatcher.php
│   │   │   │   └── [1.5K]  VirtualRequestStack.php
│   │   │   ├── [4.0K]  DependencyInjection
│   │   │   │   ├── [4.3K]  AddAnnotatedClassesToCachePass.php
│   │   │   │   ├── [1.2K]  ConfigurableExtension.php
│   │   │   │   ├── [3.0K]  ControllerArgumentValueResolverPass.php
│   │   │   │   ├── [1.6K]  Extension.php
│   │   │   │   ├── [2.0K]  FragmentRendererPass.php
│   │   │   │   ├── [1.4K]  LazyLoadingFragmentHandler.php
│   │   │   │   ├── [1.4K]  LoggerPass.php
│   │   │   │   ├── [1.1K]  MergeExtensionConfigurationPass.php
│   │   │   │   ├── [ 12K]  RegisterControllerArgumentLocatorsPass.php
│   │   │   │   ├── [1.4K]  RegisterLocaleAwareServicesPass.php
│   │   │   │   ├── [2.7K]  RemoveEmptyControllerArgumentLocatorsPass.php
│   │   │   │   ├── [2.1K]  ResettableServicePass.php
│   │   │   │   └── [1.6K]  ServicesResetter.php
│   │   │   ├── [4.0K]  Event
│   │   │   │   ├── [3.2K]  ControllerArgumentsEvent.php
│   │   │   │   ├── [3.8K]  ControllerEvent.php
│   │   │   │   ├── [2.1K]  ExceptionEvent.php
│   │   │   │   ├── [ 453]  FinishRequestEvent.php
│   │   │   │   ├── [1.7K]  KernelEvent.php
│   │   │   │   ├── [1.2K]  RequestEvent.php
│   │   │   │   ├── [1.1K]  ResponseEvent.php
│   │   │   │   ├── [1.0K]  TerminateEvent.php
│   │   │   │   └── [1.3K]  ViewEvent.php
│   │   │   ├── [4.0K]  EventListener
│   │   │   │   ├── [ 12K]  AbstractSessionListener.php
│   │   │   │   ├── [1.1K]  AddRequestFormatsListener.php
│   │   │   │   ├── [6.7K]  CacheAttributeListener.php
│   │   │   │   ├── [4.8K]  DebugHandlersListener.php
│   │   │   │   ├── [1.1K]  DisallowRobotsIndexingListener.php
│   │   │   │   ├── [1.7K]  DumpListener.php
│   │   │   │   ├── [8.8K]  ErrorListener.php
│   │   │   │   ├── [2.8K]  FragmentListener.php
│   │   │   │   ├── [2.2K]  LocaleAwareListener.php
│   │   │   │   ├── [2.8K]  LocaleListener.php
│   │   │   │   ├── [4.8K]  ProfilerListener.php
│   │   │   │   ├── [1.7K]  ResponseListener.php
│   │   │   │   ├── [7.1K]  RouterListener.php
│   │   │   │   ├── [1.0K]  SessionListener.php
│   │   │   │   ├── [1.7K]  SurrogateListener.php
│   │   │   │   └── [1.1K]  ValidateRequestListener.php
│   │   │   ├── [4.0K]  Exception
│   │   │   │   ├── [ 654]  AccessDeniedHttpException.php
│   │   │   │   ├── [ 599]  BadRequestHttpException.php
│   │   │   │   ├── [ 597]  ConflictHttpException.php
│   │   │   │   ├── [2.2K]  ControllerDoesNotReturnResponseException.php
│   │   │   │   ├── [ 593]  GoneHttpException.php
│   │   │   │   ├── [ 622]  HttpExceptionInterface.php
│   │   │   │   ├── [2.5K]  HttpException.php
│   │   │   │   ├── [ 348]  InvalidMetadataException.php
│   │   │   │   ├── [ 603]  LengthRequiredHttpException.php
│   │   │   │   ├── [ 599]  LockedHttpException.php
│   │   │   │   ├── [ 760]  MethodNotAllowedHttpException.php
│   │   │   │   ├── [ 581]  NearMissValueResolverException.php
│   │   │   │   ├── [ 602]  NotAcceptableHttpException.php
│   │   │   │   ├── [ 604]  NotFoundHttpException.php
│   │   │   │   ├── [ 607]  PreconditionFailedHttpException.php
│   │   │   │   ├── [ 655]  PreconditionRequiredHttpException.php
│   │   │   │   ├── [ 891]  ResolverNotFoundException.php
│   │   │   │   ├── [ 864]  ServiceUnavailableHttpException.php
│   │   │   │   ├── [ 907]  TooManyRequestsHttpException.php
│   │   │   │   ├── [ 754]  UnauthorizedHttpException.php
│   │   │   │   ├── [ 416]  UnexpectedSessionUsageException.php
│   │   │   │   ├── [ 617]  UnprocessableEntityHttpException.php
│   │   │   │   └── [ 609]  UnsupportedMediaTypeHttpException.php
│   │   │   ├── [4.0K]  Fragment
│   │   │   │   ├── [3.6K]  AbstractSurrogateFragmentRenderer.php
│   │   │   │   ├── [ 534]  EsiFragmentRenderer.php
│   │   │   │   ├── [3.5K]  FragmentHandler.php
│   │   │   │   ├── [ 876]  FragmentRendererInterface.php
│   │   │   │   ├── [1.0K]  FragmentUriGeneratorInterface.php
│   │   │   │   ├── [3.3K]  FragmentUriGenerator.php
│   │   │   │   ├── [3.1K]  HIncludeFragmentRenderer.php
│   │   │   │   ├── [5.1K]  InlineFragmentRenderer.php
│   │   │   │   ├── [1.5K]  RoutableFragmentRenderer.php
│   │   │   │   └── [ 534]  SsiFragmentRenderer.php
│   │   │   ├── [4.0K]  HttpCache
│   │   │   │   ├── [4.3K]  AbstractSurrogate.php
│   │   │   │   ├── [3.2K]  Esi.php
│   │   │   │   ├── [ 26K]  HttpCache.php
│   │   │   │   ├── [1013]  ResponseCacheStrategyInterface.php
│   │   │   │   ├── [9.0K]  ResponseCacheStrategy.php
│   │   │   │   ├── [2.5K]  Ssi.php
│   │   │   │   ├── [2.1K]  StoreInterface.php
│   │   │   │   ├── [ 14K]  Store.php
│   │   │   │   ├── [3.8K]  SubRequestHandler.php
│   │   │   │   └── [2.1K]  SurrogateInterface.php
│   │   │   ├── [3.8K]  HttpClientKernel.php
│   │   │   ├── [5.7K]  HttpKernelBrowser.php
│   │   │   ├── [1.2K]  HttpKernelInterface.php
│   │   │   ├── [ 11K]  HttpKernel.php
│   │   │   ├── [4.0K]  KernelEvents.php
│   │   │   ├── [3.6K]  KernelInterface.php
│   │   │   ├── [ 27K]  Kernel.php
│   │   │   ├── [1.0K]  LICENSE
│   │   │   ├── [4.0K]  Log
│   │   │   │   ├── [1.3K]  DebugLoggerConfigurator.php
│   │   │   │   ├── [1.0K]  DebugLoggerInterface.php
│   │   │   │   └── [5.9K]  Logger.php
│   │   │   ├── [4.0K]  Profiler
│   │   │   │   ├── [ 10K]  FileProfilerStorage.php
│   │   │   │   ├── [5.0K]  Profile.php
│   │   │   │   ├── [6.6K]  Profiler.php
│   │   │   │   └── [1.7K]  ProfilerStorageInterface.php
│   │   │   ├── [ 676]  README.md
│   │   │   ├── [ 793]  RebootableInterface.php
│   │   │   ├── [4.0K]  Resources
│   │   │   │   └── [ 39K]  welcome.html.php
│   │   │   └── [ 916]  TerminableInterface.php
│   │   ├── [4.0K]  polyfill-ctype
│   │   │   ├── [1.6K]  bootstrap80.php
│   │   │   ├── [1.6K]  bootstrap.php
│   │   │   ├── [ 961]  composer.json
│   │   │   ├── [6.4K]  Ctype.php
│   │   │   ├── [1.0K]  LICENSE
│   │   │   └── [ 350]  README.md
│   │   ├── [4.0K]  polyfill-mbstring
│   │   │   ├── [9.8K]  bootstrap80.php
│   │   │   ├── [8.3K]  bootstrap.php
│   │   │   ├── [ 984]  composer.json
│   │   │   ├── [1.0K]  LICENSE
│   │   │   ├── [ 35K]  Mbstring.php
│   │   │   ├── [ 370]  README.md
│   │   │   └── [4.0K]  Resources
│   │   │       └── [4.0K]  unidata
│   │   │           ├── [2.3K]  caseFolding.php
│   │   │           ├── [ 24K]  lowerCase.php
│   │   │           ├── [6.1K]  titleCaseRegexp.php
│   │   │           └── [ 26K]  upperCase.php
│   │   ├── [4.0K]  polyfill-php81
│   │   │   ├── [ 738]  bootstrap.php
│   │   │   ├── [ 916]  composer.json
│   │   │   ├── [1.0K]  LICENSE
│   │   │   ├── [ 710]  Php81.php
│   │   │   ├── [ 673]  README.md
│   │   │   └── [4.0K]  Resources
│   │   │       └── [4.0K]  stubs
│   │   │           ├── [1.4K]  CURLStringFile.php
│   │   │           └── [ 421]  ReturnTypeWillChange.php
│   │   ├── [4.0K]  polyfill-php83
│   │   │   ├── [ 954]  bootstrap81.php
│   │   │   ├── [1.9K]  bootstrap.php
│   │   │   ├── [ 916]  composer.json
│   │   │   ├── [1.0K]  LICENSE
│   │   │   ├── [6.7K]  Php83.php
│   │   │   ├── [1023]  README.md
│   │   │   └── [4.0K]  Resources
│   │   │       └── [4.0K]  stubs
│   │   │           ├── [ 317]  DateError.php
│   │   │           ├── [ 325]  DateException.php
│   │   │           ├── [ 345]  DateInvalidOperationException.php
│   │   │           ├── [ 344]  DateInvalidTimeZoneException.php
│   │   │           ├── [ 352]  DateMalformedIntervalStringException.php
│   │   │           ├── [ 350]  DateMalformedPeriodStringException.php
│   │   │           ├── [ 344]  DateMalformedStringException.php
│   │   │           ├── [ 327]  DateObjectError.php
│   │   │           ├── [ 326]  DateRangeError.php
│   │   │           ├── [ 409]  Override.php
│   │   │           └── [ 328]  SQLite3Exception.php
│   │   ├── [4.0K]  routing
│   │   │   ├── [2.5K]  Alias.php
│   │   │   ├── [4.0K]  Annotation
│   │   │   │   └── [ 659]  Route.php
│   │   │   ├── [4.0K]  Attribute
│   │   │   │   └── [6.1K]  Route.php
│   │   │   ├── [ 14K]  CHANGELOG.md
│   │   │   ├── [3.7K]  CompiledRoute.php
│   │   │   ├── [1.2K]  composer.json
│   │   │   ├── [4.0K]  DependencyInjection
│   │   │   │   ├── [1.1K]  AddExpressionLanguageProvidersPass.php
│   │   │   │   └── [1.2K]  RoutingResolverPass.php
│   │   │   ├── [4.0K]  Exception
│   │   │   │   ├── [ 430]  ExceptionInterface.php
│   │   │   │   ├── [ 385]  InvalidArgumentException.php
│   │   │   │   ├── [ 506]  InvalidParameterException.php
│   │   │   │   ├── [ 335]  LogicException.php
│   │   │   │   ├── [1.1K]  MethodNotAllowedException.php
│   │   │   │   ├── [1.4K]  MissingMandatoryParametersException.php
│   │   │   │   ├── [ 465]  NoConfigurationException.php
│   │   │   │   ├── [ 548]  ResourceNotFoundException.php
│   │   │   │   ├── [ 558]  RouteCircularReferenceException.php
│   │   │   │   ├── [ 501]  RouteNotFoundException.php
│   │   │   │   └── [ 369]  RuntimeException.php
│   │   │   ├── [4.0K]  Generator
│   │   │   │   ├── [2.4K]  CompiledUrlGenerator.php
│   │   │   │   ├── [2.2K]  ConfigurableRequirementsInterface.php
│   │   │   │   ├── [4.0K]  Dumper
│   │   │   │   │   ├── [3.9K]  CompiledUrlGeneratorDumper.php
│   │   │   │   │   ├── [ 844]  GeneratorDumperInterface.php
│   │   │   │   │   └── [ 725]  GeneratorDumper.php
│   │   │   │   ├── [3.4K]  UrlGeneratorInterface.php
│   │   │   │   └── [ 15K]  UrlGenerator.php
│   │   │   ├── [1.0K]  LICENSE
│   │   │   ├── [4.0K]  Loader
│   │   │   │   ├── [ 13K]  AttributeClassLoader.php
│   │   │   │   ├── [2.6K]  AttributeDirectoryLoader.php
│   │   │   │   ├── [4.3K]  AttributeFileLoader.php
│   │   │   │   ├── [ 919]  ClosureLoader.php
│   │   │   │   ├── [4.0K]  Configurator
│   │   │   │   │   ├── [1.1K]  AliasConfigurator.php
│   │   │   │   │   ├── [3.4K]  CollectionConfigurator.php
│   │   │   │   │   ├── [1.9K]  ImportConfigurator.php
│   │   │   │   │   ├── [1.2K]  RouteConfigurator.php
│   │   │   │   │   ├── [2.0K]  RoutingConfigurator.php
│   │   │   │   │   └── [4.0K]  Traits
│   │   │   │   │       ├── [1.8K]  AddTrait.php
│   │   │   │   │       ├── [1.6K]  HostTrait.php
│   │   │   │   │       ├── [2.5K]  LocalizedRouteTrait.php
│   │   │   │   │       ├── [2.5K]  PrefixTrait.php
│   │   │   │   │       └── [3.5K]  RouteTrait.php
│   │   │   │   ├── [ 929]  ContainerLoader.php
│   │   │   │   ├── [1.4K]  DirectoryLoader.php
│   │   │   │   ├── [1010]  GlobFileLoader.php
│   │   │   │   ├── [2.8K]  ObjectLoader.php
│   │   │   │   ├── [2.1K]  PhpFileLoader.php
│   │   │   │   ├── [3.2K]  Psr4DirectoryLoader.php
│   │   │   │   ├── [4.0K]  schema
│   │   │   │   │   └── [4.0K]  routing
│   │   │   │   │       └── [7.8K]  routing-1.0.xsd
│   │   │   │   ├── [ 18K]  XmlFileLoader.php
│   │   │   │   └── [ 12K]  YamlFileLoader.php
│   │   │   ├── [4.0K]  Matcher
│   │   │   │   ├── [ 861]  CompiledUrlMatcher.php
│   │   │   │   ├── [4.0K]  Dumper
│   │   │   │   │   ├── [ 19K]  CompiledUrlMatcherDumper.php
│   │   │   │   │   ├── [7.3K]  CompiledUrlMatcherTrait.php
│   │   │   │   │   ├── [ 842]  MatcherDumperInterface.php
│   │   │   │   │   ├── [ 719]  MatcherDumper.php
│   │   │   │   │   └── [7.0K]  StaticPrefixCollection.php
│   │   │   │   ├── [1.5K]  ExpressionLanguageProvider.php
│   │   │   │   ├── [ 864]  RedirectableUrlMatcherInterface.php
│   │   │   │   ├── [2.0K]  RedirectableUrlMatcher.php
│   │   │   │   ├── [1.2K]  RequestMatcherInterface.php
│   │   │   │   ├── [6.8K]  TraceableUrlMatcher.php
│   │   │   │   ├── [1.3K]  UrlMatcherInterface.php
│   │   │   │   └── [9.2K]  UrlMatcher.php
│   │   │   ├── [1.9K]  README.md
│   │   │   ├── [ 531]  RequestContextAwareInterface.php
│   │   │   ├── [6.6K]  RequestContext.php
│   │   │   ├── [4.0K]  Requirement
│   │   │   │   ├── [1.6K]  EnumRequirement.php
│   │   │   │   └── [1.7K]  Requirement.php
│   │   │   ├── [ 11K]  RouteCollection.php
│   │   │   ├── [ 733]  RouteCompilerInterface.php
│   │   │   ├── [ 14K]  RouteCompiler.php
│   │   │   ├── [ 12K]  Route.php
│   │   │   ├── [ 994]  RouterInterface.php
│   │   │   └── [ 11K]  Router.php
│   │   ├── [4.0K]  service-contracts
│   │   │   ├── [4.0K]  Attribute
│   │   │   │   ├── [ 657]  Required.php
│   │   │   │   └── [1.5K]  SubscribedService.php
│   │   │   ├── [ 157]  CHANGELOG.md
│   │   │   ├── [1.1K]  composer.json
│   │   │   ├── [1.0K]  LICENSE
│   │   │   ├── [ 330]  README.md
│   │   │   ├── [1.0K]  ResetInterface.php
│   │   │   ├── [ 626]  ServiceCollectionInterface.php
│   │   │   ├── [3.6K]  ServiceLocatorTrait.php
│   │   │   ├── [2.9K]  ServiceMethodsSubscriberTrait.php
│   │   │   ├── [1.3K]  ServiceProviderInterface.php
│   │   │   ├── [2.7K]  ServiceSubscriberInterface.php
│   │   │   ├── [3.2K]  ServiceSubscriberTrait.php
│   │   │   └── [4.0K]  Test
│   │   │       ├── [2.9K]  ServiceLocatorTestCase.php
│   │   │       └── [ 462]  ServiceLocatorTest.php
│   │   ├── [4.0K]  translation-contracts
│   │   │   ├── [ 157]  CHANGELOG.md
│   │   │   ├── [1000]  composer.json
│   │   │   ├── [1.0K]  LICENSE
│   │   │   ├── [ 620]  LocaleAwareInterface.php
│   │   │   ├── [ 338]  README.md
│   │   │   ├── [4.0K]  Test
│   │   │   │   └── [ 16K]  TranslatorTest.php
│   │   │   ├── [ 458]  TranslatableInterface.php
│   │   │   ├── [2.5K]  TranslatorInterface.php
│   │   │   └── [7.5K]  TranslatorTrait.php
│   │   ├── [4.0K]  twig-bridge
│   │   │   ├── [5.9K]  AppVariable.php
│   │   │   ├── [4.0K]  Attribute
│   │   │   │   └── [ 862]  Template.php
│   │   │   ├── [7.1K]  CHANGELOG.md
│   │   │   ├── [4.0K]  Command
│   │   │   │   ├── [ 20K]  DebugCommand.php
│   │   │   │   └── [ 10K]  LintCommand.php
│   │   │   ├── [2.6K]  composer.json
│   │   │   ├── [4.0K]  DataCollector
│   │   │   │   └── [4.9K]  TwigDataCollector.php
│   │   │   ├── [4.0K]  ErrorRenderer
│   │   │   │   └── [2.8K]  TwigErrorRenderer.php
│   │   │   ├── [4.0K]  EventListener
│   │   │   │   └── [2.5K]  TemplateAttributeListener.php
│   │   │   ├── [4.0K]  Extension
│   │   │   │   ├── [1.4K]  AssetExtension.php
│   │   │   │   ├── [ 691]  CsrfExtension.php
│   │   │   │   ├── [ 752]  CsrfRuntime.php
│   │   │   │   ├── [1.9K]  DumpExtension.php
│   │   │   │   ├── [1.6K]  EmojiExtension.php
│   │   │   │   ├── [ 873]  ExpressionExtension.php
│   │   │   │   ├── [6.8K]  FormExtension.php
│   │   │   │   ├── [1013]  HtmlSanitizerExtension.php
│   │   │   │   ├── [1.6K]  HttpFoundationExtension.php
│   │   │   │   ├── [1.2K]  HttpKernelExtension.php
│   │   │   │   ├── [1.9K]  HttpKernelRuntime.php
│   │   │   │   ├── [ 647]  ImportMapExtension.php
│   │   │   │   ├── [ 719]  ImportMapRuntime.php
│   │   │   │   ├── [1.5K]  LogoutUrlExtension.php
│   │   │   │   ├── [1.4K]  ProfilerExtension.php
│   │   │   │   ├── [3.3K]  RoutingExtension.php
│   │   │   │   ├── [2.9K]  SecurityExtension.php
│   │   │   │   ├── [ 614]  SerializerExtension.php
│   │   │   │   ├── [ 779]  SerializerRuntime.php
│   │   │   │   ├── [1.2K]  StopwatchExtension.php
│   │   │   │   ├── [4.6K]  TranslationExtension.php
│   │   │   │   ├── [3.9K]  WebLinkExtension.php
│   │   │   │   ├── [3.8K]  WorkflowExtension.php
│   │   │   │   └── [1.5K]  YamlExtension.php
│   │   │   ├── [4.0K]  Form
│   │   │   │   └── [6.7K]  TwigRendererEngine.php
│   │   │   ├── [1.0K]  LICENSE
│   │   │   ├── [4.0K]  Mime
│   │   │   │   ├── [3.0K]  BodyRenderer.php
│   │   │   │   ├── [7.6K]  NotificationEmail.php
│   │   │   │   ├── [2.3K]  TemplatedEmail.php
│   │   │   │   └── [4.8K]  WrappedTemplatedEmail.php
│   │   │   ├── [4.0K]  Node
│   │   │   │   ├── [3.0K]  DumpNode.php
│   │   │   │   ├── [1.4K]  FormThemeNode.php
│   │   │   │   ├── [1.3K]  RenderBlockNode.php
│   │   │   │   ├── [4.8K]  SearchAndRenderBlockNode.php
│   │   │   │   ├── [1.7K]  StopwatchNode.php
│   │   │   │   ├── [1.0K]  TransDefaultDomainNode.php
│   │   │   │   └── [4.2K]  TransNode.php
│   │   │   ├── [4.0K]  NodeVisitor
│   │   │   │   ├── [1.8K]  Scope.php
│   │   │   │   ├── [3.6K]  TranslationDefaultDomainNodeVisitor.php
│   │   │   │   └── [6.1K]  TranslationNodeVisitor.php
│   │   │   ├── [ 434]  README.md
│   │   │   ├── [4.0K]  Resources
│   │   │   │   └── [4.0K]  views
│   │   │   │       ├── [4.0K]  Email
│   │   │   │       │   ├── [4.0K]  default
│   │   │   │       │   │   └── [4.0K]  notification
│   │   │   │       │   │       ├── [  58]  body.html.twig
│   │   │   │       │   │       └── [  57]  body.txt.twig
│   │   │   │       │   └── [4.0K]  zurb_2
│   │   │   │       │       ├── [ 29K]  main.css
│   │   │   │       │       └── [4.0K]  notification
│   │   │   │       │           ├── [2.2K]  body.html.twig
│   │   │   │       │           ├── [ 322]  body.txt.twig
│   │   │   │       │           ├── [  31]  content_markdown.html.twig
│   │   │   │       │           └── [ 273]  local.css
│   │   │   │       └── [4.0K]  Form
│   │   │   │           ├── [2.6K]  bootstrap_3_horizontal_layout.html.twig
│   │   │   │           ├── [8.3K]  bootstrap_3_layout.html.twig
│   │   │   │           ├── [3.4K]  bootstrap_4_horizontal_layout.html.twig
│   │   │   │           ├── [ 13K]  bootstrap_4_layout.html.twig
│   │   │   │           ├── [5.6K]  bootstrap_5_horizontal_layout.html.twig
│   │   │   │           ├── [ 14K]  bootstrap_5_layout.html.twig
│   │   │   │           ├── [8.6K]  bootstrap_base_layout.html.twig
│   │   │   │           ├── [ 18K]  form_div_layout.html.twig
│   │   │   │           ├── [1.5K]  form_table_layout.html.twig
│   │   │   │           ├── [ 13K]  foundation_5_layout.html.twig
│   │   │   │           ├── [1.9K]  foundation_6_layout.html.twig
│   │   │   │           └── [2.6K]  tailwind_2_layout.html.twig
│   │   │   ├── [4.0K]  Test
│   │   │   │   ├── [4.6K]  FormLayoutTestCase.php
│   │   │   │   └── [4.0K]  Traits
│   │   │   │       └── [ 801]  RuntimeLoaderProvider.php
│   │   │   ├── [4.0K]  TokenParser
│   │   │   │   ├── [1.1K]  DumpTokenParser.php
│   │   │   │   ├── [1.6K]  FormThemeTokenParser.php
│   │   │   │   ├── [1.5K]  StopwatchTokenParser.php
│   │   │   │   ├── [ 975]  TransDefaultDomainTokenParser.php
│   │   │   │   └── [2.8K]  TransTokenParser.php
│   │   │   ├── [4.0K]  Translation
│   │   │   │   └── [2.4K]  TwigExtractor.php
│   │   │   └── [4.2K]  UndefinedCallableHandler.php
│   │   ├── [4.0K]  twig-bundle
│   │   │   ├── [4.0K]  CacheWarmer
│   │   │   │   └── [2.3K]  TemplateCacheWarmer.php
│   │   │   ├── [4.5K]  CHANGELOG.md
│   │   │   ├── [4.0K]  Command
│   │   │   │   └── [1.3K]  LintCommand.php
│   │   │   ├── [1.5K]  composer.json
│   │   │   ├── [4.0K]  DependencyInjection
│   │   │   │   ├── [4.0K]  Compiler
│   │   │   │   │   ├── [5.8K]  ExtensionPass.php
│   │   │   │   │   ├── [1.2K]  RuntimeLoaderPass.php
│   │   │   │   │   ├── [2.1K]  TwigEnvironmentPass.php
│   │   │   │   │   └── [1.8K]  TwigLoaderPass.php
│   │   │   │   ├── [9.2K]  Configuration.php
│   │   │   │   ├── [4.0K]  Configurator
│   │   │   │   │   └── [1.9K]  EnvironmentConfigurator.php
│   │   │   │   └── [9.2K]  TwigExtension.php
│   │   │   ├── [1.0K]  LICENSE
│   │   │   ├── [ 411]  README.md
│   │   │   ├── [4.0K]  Resources
│   │   │   │   └── [4.0K]  config
│   │   │   │       ├── [1.0K]  console.php
│   │   │   │       ├── [ 993]  form.php
│   │   │   │       ├── [ 782]  importmap.php
│   │   │   │       ├── [ 910]  mailer.php
│   │   │   │       ├── [4.0K]  schema
│   │   │   │       │   └── [2.7K]  twig-1.0.xsd
│   │   │   │       └── [7.9K]  twig.php
│   │   │   ├── [3.0K]  TemplateIterator.php
│   │   │   └── [1.5K]  TwigBundle.php
│   │   ├── [4.0K]  var-dumper
│   │   │   ├── [4.0K]  Caster
│   │   │   │   ├── [6.6K]  AmqpCaster.php
│   │   │   │   ├── [2.2K]  ArgsStub.php
│   │   │   │   ├── [6.7K]  Caster.php
│   │   │   │   ├── [3.7K]  ClassStub.php
│   │   │   │   ├── [ 740]  ConstStub.php
│   │   │   │   ├── [ 702]  CutArrayStub.php
│   │   │   │   ├── [1.9K]  CutStub.php
│   │   │   │   ├── [4.8K]  DateCaster.php
│   │   │   │   ├── [1.7K]  DoctrineCaster.php
│   │   │   │   ├── [ 11K]  DOMCaster.php
│   │   │   │   ├── [1.6K]  DsCaster.php
│   │   │   │   ├── [ 625]  DsPairStub.php
│   │   │   │   ├── [ 642]  EnumStub.php
│   │   │   │   ├── [ 16K]  ExceptionCaster.php
│   │   │   │   ├── [5.5K]  FFICaster.php
│   │   │   │   ├── [1.0K]  FiberCaster.php
│   │   │   │   ├── [ 750]  FrameStub.php
│   │   │   │   ├── [ 749]  GmpCaster.php
│   │   │   │   ├── [ 949]  ImagineCaster.php
│   │   │   │   ├── [ 637]  ImgStub.php
│   │   │   │   ├── [8.8K]  IntlCaster.php
│   │   │   │   ├── [3.3K]  LinkStub.php
│   │   │   │   ├── [2.2K]  MemcachedCaster.php
│   │   │   │   ├── [ 691]  MysqliCaster.php
│   │   │   │   ├── [3.5K]  PdoCaster.php
│   │   │   │   ├── [5.4K]  PgSqlCaster.php
│   │   │   │   ├── [ 728]  ProxyManagerCaster.php
│   │   │   │   ├── [4.6K]  RdKafkaCaster.php
│   │   │   │   ├── [5.3K]  RedisCaster.php
│   │   │   │   ├── [ 15K]  ReflectionCaster.php
│   │   │   │   ├── [2.9K]  ResourceCaster.php
│   │   │   │   ├── [ 554]  ScalarStub.php
│   │   │   │   ├── [7.8K]  SplCaster.php
│   │   │   │   ├── [2.3K]  StubCaster.php
│   │   │   │   ├── [3.5K]  SymfonyCaster.php
│   │   │   │   ├── [ 982]  TraceStub.php
│   │   │   │   ├── [ 615]  UninitializedStub.php
│   │   │   │   ├── [ 668]  UuidCaster.php
│   │   │   │   ├── [3.3K]  XmlReaderCaster.php
│   │   │   │   └── [2.5K]  XmlResourceCaster.php
│   │   │   ├── [2.8K]  CHANGELOG.md
│   │   │   ├── [4.0K]  Cloner
│   │   │   │   ├── [ 22K]  AbstractCloner.php
│   │   │   │   ├── [ 459]  ClonerInterface.php
│   │   │   │   ├── [1.1K]  Cursor.php
│   │   │   │   ├── [ 13K]  Data.php
│   │   │   │   ├── [1.8K]  DumperInterface.php
│   │   │   │   ├── [4.0K]  Internal
│   │   │   │   │   └── [ 550]  NoDefault.php
│   │   │   │   ├── [1.9K]  Stub.php
│   │   │   │   └── [9.9K]  VarCloner.php
│   │   │   ├── [4.0K]  Command
│   │   │   │   ├── [4.0K]  Descriptor
│   │   │   │   │   ├── [2.6K]  CliDescriptor.php
│   │   │   │   │   ├── [ 610]  DumpDescriptorInterface.php
│   │   │   │   │   └── [3.6K]  HtmlDescriptor.php
│   │   │   │   └── [3.8K]  ServerDumpCommand.php
│   │   │   ├── [1.1K]  composer.json
│   │   │   ├── [4.0K]  Dumper
│   │   │   │   ├── [6.0K]  AbstractDumper.php
│   │   │   │   ├── [ 23K]  CliDumper.php
│   │   │   │   ├── [4.0K]  ContextProvider
│   │   │   │   │   ├── [ 806]  CliContextProvider.php
│   │   │   │   │   ├── [ 537]  ContextProviderInterface.php
│   │   │   │   │   ├── [1.5K]  RequestContextProvider.php
│   │   │   │   │   └── [4.9K]  SourceContextProvider.php
│   │   │   │   ├── [1.2K]  ContextualizedDumper.php
│   │   │   │   ├── [ 548]  DataDumperInterface.php
│   │   │   │   ├── [ 33K]  HtmlDumper.php
│   │   │   │   └── [1.6K]  ServerDumper.php
│   │   │   ├── [4.0K]  Exception
│   │   │   │   └── [ 650]  ThrowingCasterException.php
│   │   │   ├── [1.0K]  LICENSE
│   │   │   ├── [ 607]  README.md
│   │   │   ├── [4.0K]  Resources
│   │   │   │   ├── [4.0K]  bin
│   │   │   │   │   └── [2.1K]  var-dump-server
│   │   │   │   ├── [4.0K]  css
│   │   │   │   │   └── [2.9K]  htmlDescriptor.css
│   │   │   │   ├── [4.0K]  functions
│   │   │   │   │   └── [1.6K]  dump.php
│   │   │   │   └── [4.0K]  js
│   │   │   │       └── [ 354]  htmlDescriptor.js
│   │   │   ├── [4.0K]  Server
│   │   │   │   ├── [2.6K]  Connection.php
│   │   │   │   └── [3.1K]  DumpServer.php
│   │   │   ├── [4.0K]  Test
│   │   │   │   └── [2.6K]  VarDumperTestTrait.php
│   │   │   └── [4.0K]  VarDumper.php
│   │   └── [4.0K]  var-exporter
│   │       ├── [ 483]  CHANGELOG.md
│   │       ├── [ 964]  composer.json
│   │       ├── [4.0K]  Exception
│   │       │   ├── [ 546]  ClassNotFoundException.php
│   │       │   ├── [ 342]  ExceptionInterface.php
│   │       │   ├── [ 369]  LogicException.php
│   │       │   └── [ 559]  NotInstantiableTypeException.php
│   │       ├── [2.9K]  Hydrator.php
│   │       ├── [2.3K]  Instantiator.php
│   │       ├── [4.0K]  Internal
│   │       │   ├── [ 16K]  Exporter.php
│   │       │   ├── [ 10K]  Hydrator.php
│   │       │   ├── [4.6K]  LazyObjectRegistry.php
│   │       │   ├── [2.8K]  LazyObjectState.php
│   │       │   ├── [ 671]  LazyObjectTrait.php
│   │       │   ├── [ 528]  Reference.php
│   │       │   ├── [5.3K]  Registry.php
│   │       │   └── [ 458]  Values.php
│   │       ├── [ 12K]  LazyGhostTrait.php
│   │       ├── [ 849]  LazyObjectInterface.php
│   │       ├── [ 12K]  LazyProxyTrait.php
│   │       ├── [1.0K]  LICENSE
│   │       ├── [ 18K]  ProxyHelper.php
│   │       ├── [5.3K]  README.md
│   │       └── [3.5K]  VarExporter.php
│   └── [4.0K]  twig
│       ├── [4.0K]  extra-bundle
│       │   ├── [1.2K]  composer.json
│       │   ├── [4.0K]  DependencyInjection
│       │   │   ├── [4.0K]  Compiler
│       │   │   │   └── [1.4K]  MissingExtensionSuggestorPass.php
│       │   │   ├── [1006]  Configuration.php
│       │   │   └── [1.5K]  TwigExtraExtension.php
│       │   ├── [4.1K]  Extensions.php
│       │   ├── [ 875]  LeagueCommonMarkConverterFactory.php
│       │   ├── [1.0K]  LICENSE
│       │   ├── [1.3K]  MissingExtensionSuggestor.php
│       │   ├── [ 206]  README.md
│       │   ├── [4.0K]  Resources
│       │   │   └── [4.0K]  config
│       │   │       ├── [1.6K]  cache.php
│       │   │       ├── [ 523]  cssinliner.php
│       │   │       ├── [ 499]  html.php
│       │   │       ├── [ 499]  inky.php
│       │   │       ├── [ 499]  intl.php
│       │   │       ├── [1.3K]  markdown_league.php
│       │   │       ├── [1.1K]  markdown.php
│       │   │       ├── [ 507]  string.php
│       │   │       └── [ 511]  suggestor.php
│       │   └── [ 683]  TwigExtraBundle.php
│       └── [4.0K]  twig
│           ├── [ 13K]  CHANGELOG
│           ├── [1.4K]  composer.json
│           ├── [1.5K]  LICENSE
│           ├── [ 741]  README.rst
│           └── [4.0K]  src
│               ├── [3.3K]  AbstractTwigCallable.php
│               ├── [4.0K]  Attribute
│               │   ├── [ 398]  FirstClassTwigCallableReady.php
│               │   └── [ 398]  YieldReady.php
│               ├── [4.0K]  Cache
│               │   ├── [1.1K]  CacheInterface.php
│               │   ├── [1.8K]  ChainCache.php
│               │   ├── [2.5K]  FilesystemCache.php
│               │   ├── [ 690]  NullCache.php
│               │   └── [ 560]  ReadOnlyFilesystemCache.php
│               ├── [6.2K]  Compiler.php
│               ├── [ 26K]  Environment.php
│               ├── [4.0K]  Error
│               │   ├── [6.7K]  Error.php
│               │   ├── [ 387]  LoaderError.php
│               │   ├── [ 397]  RuntimeError.php
│               │   └── [1.2K]  SyntaxError.php
│               ├── [ 33K]  ExpressionParser.php
│               ├── [4.0K]  Extension
│               │   ├── [ 703]  AbstractExtension.php
│               │   ├── [ 65K]  CoreExtension.php
│               │   ├── [1.6K]  DebugExtension.php
│               │   ├── [6.5K]  EscaperExtension.php
│               │   ├── [1.8K]  ExtensionInterface.php
│               │   ├── [ 470]  GlobalsInterface.php
│               │   ├── [ 539]  OptimizerExtension.php
│               │   ├── [1.0K]  ProfilerExtension.php
│               │   ├── [ 326]  RuntimeExtensionInterface.php
│               │   ├── [3.6K]  SandboxExtension.php
│               │   ├── [2.4K]  StagingExtension.php
│               │   ├── [1.0K]  StringLoaderExtension.php
│               │   └── [ 588]  YieldNotReadyExtension.php
│               ├── [ 14K]  ExtensionSet.php
│               ├── [1.4K]  FileExtensionEscapingStrategy.php
│               ├── [ 22K]  Lexer.php
│               ├── [4.0K]  Loader
│               │   ├── [2.0K]  ArrayLoader.php
│               │   ├── [3.3K]  ChainLoader.php
│               │   ├── [7.6K]  FilesystemLoader.php
│               │   └── [1.1K]  LoaderInterface.php
│               ├── [ 960]  Markup.php
│               ├── [4.0K]  Node
│               │   ├── [ 866]  AutoEscapeNode.php
│               │   ├── [1.2K]  BlockNode.php
│               │   ├── [ 870]  BlockReferenceNode.php
│               │   ├── [ 389]  BodyNode.php
│               │   ├── [1.5K]  CaptureNode.php
│               │   ├── [ 617]  CheckSecurityCallNode.php
│               │   ├── [3.0K]  CheckSecurityNode.php
│               │   ├── [1.2K]  CheckToStringNode.php
│               │   ├── [1.8K]  DeprecatedNode.php
│               │   ├── [ 820]  DoNode.php
│               │   ├── [1.4K]  EmbedNode.php
│               │   ├── [4.0K]  Expression
│               │   │   ├── [ 595]  AbstractExpression.php
│               │   │   ├── [3.9K]  ArrayExpression.php
│               │   │   ├── [1.5K]  ArrowFunctionExpression.php
│               │   │   ├── [ 529]  AssignNameExpression.php
│               │   │   ├── [4.0K]  Binary
│               │   │   │   ├── [ 992]  AbstractBinary.php
│               │   │   │   ├── [ 434]  AddBinary.php
│               │   │   │   ├── [ 435]  AndBinary.php
│               │   │   │   ├── [ 441]  BitwiseAndBinary.php
│               │   │   │   ├── [ 440]  BitwiseOrBinary.php
│               │   │   │   ├── [ 441]  BitwiseXorBinary.php
│               │   │   │   ├── [ 437]  ConcatBinary.php
│               │   │   │   ├── [ 434]  DivBinary.php
│               │   │   │   ├── [ 890]  EndsWithBinary.php
│               │   │   │   ├── [ 821]  EqualBinary.php
│               │   │   │   ├── [ 589]  FloorDivBinary.php
│               │   │   │   ├── [ 822]  GreaterBinary.php
│               │   │   │   ├── [ 827]  GreaterEqualBinary.php
│               │   │   │   ├── [ 717]  HasEveryBinary.php
│               │   │   │   ├── [ 715]  HasSomeBinary.php
│               │   │   │   ├── [ 699]  InBinary.php
│               │   │   │   ├── [ 820]  LessBinary.php
│               │   │   │   ├── [ 824]  LessEqualBinary.php
│               │   │   │   ├── [ 701]  MatchesBinary.php
│               │   │   │   ├── [ 434]  ModBinary.php
│               │   │   │   ├── [ 434]  MulBinary.php
│               │   │   │   ├── [ 824]  NotEqualBinary.php
│               │   │   │   ├── [ 707]  NotInBinary.php
│               │   │   │   ├── [ 434]  OrBinary.php
│               │   │   │   ├── [ 415]  PowerBinary.php
│               │   │   │   ├── [ 684]  RangeBinary.php
│               │   │   │   ├── [ 420]  SpaceshipBinary.php
│               │   │   │   ├── [ 894]  StartsWithBinary.php
│               │   │   │   └── [ 434]  SubBinary.php
│               │   │   ├── [2.3K]  BlockReferenceExpression.php
│               │   │   ├── [ 15K]  CallExpression.php
│               │   │   ├── [1.3K]  ConditionalExpression.php
│               │   │   ├── [ 601]  ConstantExpression.php
│               │   │   ├── [4.0K]  Filter
│               │   │   │   ├── [2.1K]  DefaultFilter.php
│               │   │   │   └── [1010]  RawFilter.php
│               │   │   ├── [2.8K]  FilterExpression.php
│               │   │   ├── [2.7K]  FunctionExpression.php
│               │   │   ├── [4.0K]  FunctionNode
│               │   │   │   └── [1.3K]  EnumCasesFunction.php
│               │   │   ├── [2.7K]  GetAttrExpression.php
│               │   │   ├── [ 653]  InlinePrint.php
│               │   │   ├── [1.8K]  MethodCallExpression.php
│               │   │   ├── [3.3K]  NameExpression.php
│               │   │   ├── [2.1K]  NullCoalesceExpression.php
│               │   │   ├── [1.1K]  ParentExpression.php
│               │   │   ├── [ 632]  TempNameExpression.php
│               │   │   ├── [4.0K]  Test
│               │   │   │   ├── [1.2K]  ConstantTest.php
│               │   │   │   ├── [2.8K]  DefinedTest.php
│               │   │   │   ├── [ 793]  DivisiblebyTest.php
│               │   │   │   ├── [ 679]  EvenTest.php
│               │   │   │   ├── [ 661]  NullTest.php
│               │   │   │   ├── [ 676]  OddTest.php
│               │   │   │   └── [ 754]  SameasTest.php
│               │   │   ├── [2.2K]  TestExpression.php
│               │   │   ├── [4.0K]  Unary
│               │   │   │   ├── [ 795]  AbstractUnary.php
│               │   │   │   ├── [ 431]  NegUnary.php
│               │   │   │   ├── [ 431]  NotUnary.php
│               │   │   │   └── [ 431]  PosUnary.php
│               │   │   └── [ 442]  VariadicExpression.php
│               │   ├── [ 772]  FlushNode.php
│               │   ├── [1.4K]  ForLoopNode.php
│               │   ├── [4.0K]  ForNode.php
│               │   ├── [1.8K]  IfNode.php
│               │   ├── [2.2K]  ImportNode.php
│               │   ├── [3.2K]  IncludeNode.php
│               │   ├── [3.0K]  MacroNode.php
│               │   ├── [ 15K]  ModuleNode.php
│               │   ├── [ 916]  NameDeprecation.php
│               │   ├── [ 384]  NodeCaptureInterface.php
│               │   ├── [ 363]  NodeOutputInterface.php
│               │   ├── [8.8K]  Node.php
│               │   ├── [1008]  PrintNode.php
│               │   ├── [1.3K]  SandboxNode.php
│               │   ├── [2.8K]  SetNode.php
│               │   ├── [ 834]  TextNode.php
│               │   ├── [ 533]  TypesNode.php
│               │   └── [2.1K]  WithNode.php
│               ├── [1.8K]  NodeTraverser.php
│               ├── [4.0K]  NodeVisitor
│               │   ├── [1.2K]  AbstractNodeVisitor.php
│               │   ├── [7.1K]  EscaperNodeVisitor.php
│               │   ├── [2.2K]  MacroAutoImportNodeVisitor.php
│               │   ├── [1013]  NodeVisitorInterface.php
│               │   ├── [6.6K]  OptimizerNodeVisitor.php
│               │   ├── [5.1K]  SafeAnalysisNodeVisitor.php
│               │   ├── [4.4K]  SandboxNodeVisitor.php
│               │   └── [1.6K]  YieldNotReadyNodeVisitor.php
│               ├── [ 13K]  Parser.php
│               ├── [4.0K]  Profiler
│               │   ├── [4.0K]  Dumper
│               │   │   ├── [1.7K]  BaseDumper.php
│               │   │   ├── [1.9K]  BlackfireDumper.php
│               │   │   ├── [1.4K]  HtmlDumper.php
│               │   │   └── [ 899]  TextDumper.php
│               │   ├── [4.0K]  Node
│               │   │   ├── [1.3K]  EnterProfileNode.php
│               │   │   └── [ 825]  LeaveProfileNode.php
│               │   ├── [4.0K]  NodeVisitor
│               │   │   └── [2.1K]  ProfilerNodeVisitor.php
│               │   └── [4.0K]  Profile.php
│               ├── [4.0K]  Resources
│               │   ├── [ 13K]  core.php
│               │   ├── [ 578]  debug.php
│               │   ├── [1.2K]  escaper.php
│               │   └── [ 679]  string_loader.php
│               ├── [4.0K]  Runtime
│               │   └── [ 13K]  EscaperRuntime.php
│               ├── [4.0K]  RuntimeLoader
│               │   ├── [ 830]  ContainerRuntimeLoader.php
│               │   ├── [ 818]  FactoryRuntimeLoader.php
│               │   └── [ 683]  RuntimeLoaderInterface.php
│               ├── [4.0K]  Sandbox
│               │   ├── [ 409]  SecurityError.php
│               │   ├── [ 707]  SecurityNotAllowedFilterError.php
│               │   ├── [ 719]  SecurityNotAllowedFunctionError.php
│               │   ├── [ 868]  SecurityNotAllowedMethodError.php
│               │   ├── [ 884]  SecurityNotAllowedPropertyError.php
│               │   ├── [ 679]  SecurityNotAllowedTagError.php
│               │   ├── [ 983]  SecurityPolicyInterface.php
│               │   ├── [4.4K]  SecurityPolicy.php
│               │   └── [ 477]  SourcePolicyInterface.php
│               ├── [ 929]  Source.php
│               ├── [ 15K]  Template.php
│               ├── [2.1K]  TemplateWrapper.php
│               ├── [4.0K]  Test
│               │   ├── [9.5K]  IntegrationTestCase.php
│               │   └── [3.6K]  NodeTestCase.php
│               ├── [4.0K]  TokenParser
│               │   ├── [ 573]  AbstractTokenParser.php
│               │   ├── [1.4K]  ApplyTokenParser.php
│               │   ├── [1.5K]  AutoEscapeTokenParser.php
│               │   ├── [2.1K]  BlockTokenParser.php
│               │   ├── [1.9K]  DeprecatedTokenParser.php
│               │   ├── [ 755]  DoTokenParser.php
│               │   ├── [2.1K]  EmbedTokenParser.php
│               │   ├── [1.2K]  ExtendsTokenParser.php
│               │   ├── [ 683]  FlushTokenParser.php
│               │   ├── [2.2K]  ForTokenParser.php
│               │   ├── [1.6K]  FromTokenParser.php
│               │   ├── [2.4K]  IfTokenParser.php
│               │   ├── [1.1K]  ImportTokenParser.php
│               │   ├── [1.5K]  IncludeTokenParser.php
│               │   ├── [1.8K]  MacroTokenParser.php
│               │   ├── [1.7K]  SandboxTokenParser.php
│               │   ├── [2.0K]  SetTokenParser.php
│               │   ├── [ 875]  TokenParserInterface.php
│               │   ├── [2.2K]  TypesTokenParser.php
│               │   ├── [1.9K]  UseTokenParser.php
│               │   └── [1.2K]  WithTokenParser.php
│               ├── [5.3K]  Token.php
│               ├── [3.4K]  TokenStream.php
│               ├── [1.2K]  TwigCallableInterface.php
│               ├── [1.8K]  TwigFilter.php
│               ├── [1.6K]  TwigFunction.php
│               ├── [1.5K]  TwigTest.php
│               └── [4.0K]  Util
│                   ├── [8.7K]  CallableArgumentsExtractor.php
│                   ├── [2.0K]  DeprecationCollector.php
│                   ├── [2.7K]  ReflectionCallable.php
│                   └── [ 642]  TemplateDirIterator.php
└── [4.0K]  vorlagen
    ├── [2.1K]  aktionen.html
    ├── [4.0K]  css
    │   ├── [1.2K]  styles.css
    │   └── [ 384]  styles.css.map
    ├── [2.1K]  danksagungen.html
    ├── [4.0K]  fonts
    ├── [2.1K]  helfen-sie.html
    ├── [4.0K]  images
    │   ├── [   0]  picture1.jpg
    │   ├── [   0]  picture2.jpg
    │   ├── [   0]  picture3.jpg
    │   ├── [   0]  picture4.jpg
    │   └── [   0]  picture5.jpg
    ├── [4.1K]  index.html
    ├── [4.0K]  js
    │   └── [1.2K]  scripts.js
    ├── [ 607]  README.md
    ├── [4.0K]  scss
    ├── [2.2K]  tiere-in-der-vermittlung.html
    └── [2.1K]  tierschutzarbeit.html

264 directories, 1557 files
```