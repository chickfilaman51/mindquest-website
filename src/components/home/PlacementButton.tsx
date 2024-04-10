import { Link } from 'react-router-dom';

type Props = {};

export const PlacementButton = (props: Props) => {
  return (
    <Link to="/placementtest" className="btn normal-case">
      Start the Placement Test
    </Link>
  );
};
