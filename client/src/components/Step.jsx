const Step = ({ step }) => {

  const { title, description, icon } = step;

  return (
    <div className="group backdrop-blur-xl border border-brand flex flex-col items-center p-4 pt-8 rounded-lg relative select-none shadow-md">
			<span
				className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] bg-gradient-to-b from-background border border-hovery group-hover:border-brand
				bg-[#272727]
				p-2 rounded-[100px] group-hover:text-brand transition-all duration-300"
			>
				{icon}
			</span>
			<h1 className="text-large text-text group-hover:text-brand transition-all duration-300">
				{title}
			</h1>
			<p className="my-2 text-center text-custom_03">{description}</p>
		</div>
  )
}

export default Step