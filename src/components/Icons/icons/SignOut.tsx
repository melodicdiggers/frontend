import { IconProps } from '../../../types/icon'

const SignOutSvg = (props: IconProps) => {
	return (
		<svg
			className={props.className}
			width={props.width}
			height={props.heigth}
			viewBox='0 0 19 19'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M3.66602 14.9987H5.49935V16.832H16.4994V2.16536H5.49935V3.9987H3.66602V1.2487C3.66602 1.00558 3.76259 0.772425 3.9345 0.600517C4.10641 0.428608 4.33957 0.332031 4.58268 0.332031H17.416C17.6591 0.332031 17.8923 0.428608 18.0642 0.600517C18.2361 0.772425 18.3327 1.00558 18.3327 1.2487V17.7487C18.3327 17.9918 18.2361 18.225 18.0642 18.3969C17.8923 18.5688 17.6591 18.6654 17.416 18.6654H4.58268C4.33957 18.6654 4.10641 18.5688 3.9345 18.3969C3.76259 18.225 3.66602 17.9918 3.66602 17.7487V14.9987ZM5.49935 8.58203H11.916V10.4154H5.49935V13.1654L0.916016 9.4987L5.49935 5.83203V8.58203Z'
				fill={props.color}
			/>
		</svg>
	)
}

export default SignOutSvg
