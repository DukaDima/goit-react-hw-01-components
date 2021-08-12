import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';
import StatisticsList from './components/Statistics/StatisticsList';
import statisticalData from './components/Statistics/statistical-data.json';

export default function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <StatisticsList stats={statisticalData} />
    </div>
  );
}
