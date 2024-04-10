import { Link } from 'react-router-dom';

type Props = {};

export const LearningButton = (props: Props) => {
  return (
    <Link to="/dashboard" className="btn my-4 normal-case">
      Start Learning!
    </Link>
  );
};
