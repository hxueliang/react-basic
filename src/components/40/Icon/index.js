const iconMap = new Map();
let files = require.context('./svg', false, /\.svg$/);

files.keys().forEach((key) => {
  const name = key.replace(/(.*\/)*([^.]+).*/ig, "$2");
  iconMap.set(name, files(key).default || files(key));
});

const Icon = ({ type = 'food' }) => {
  return (
    <img
      // src={`https://yjy-teach-oss.oss-cn-beijing.aliyuncs.com/reactbase/ka/${type}.svg`}
      src={iconMap.get(type)}
      alt="icon"
      style={{
        width: 20,
        height: 20,
      }}
    />
  );
};

export default Icon;