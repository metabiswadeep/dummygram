import { Button } from "@mui/material";
import Loader from "../components/Loader";

export default function AnimatedButton(props) {
  const { loading, children, ..._props } = props;
  return (
    <Button {..._props} disabled={loading}>
      {loading ? <Loader /> : children}
    </Button>
  );
}
