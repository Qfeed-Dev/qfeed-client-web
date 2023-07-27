import Spacing from "src/components/Spacing";
import Textarea from "src/components/Textarea";
import BackTitle from "src/components/Title/BackTitle";

export default function Page() {
  return (
    <>
      <BackTitle />

      <Spacing size={42} />
      <Textarea size={140} />
    </>
  );
}
