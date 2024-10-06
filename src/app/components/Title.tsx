interface TitleProps {
  text: string;
}

export default function Title({ text }: TitleProps) {
  return (
    <h1 className="text-5xl font-extrabold text-center my-10 text-primary">
      {text}
    </h1>
  );
}
