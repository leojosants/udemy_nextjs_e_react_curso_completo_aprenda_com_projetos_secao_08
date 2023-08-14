import { TitleProps } from '../interfaces/TitleProps';

export default function Title(props: TitleProps) {
    return (
        <div>
            <h1 className={`
                font-black
                text-3xl
                text-gray-900
                dark:text-gray-100`}>

                {props.title}
            </h1>

            <h2 className={`
                font-light
                text-sm
                dark:text-gray-300`}>

                {props.subtitle}

            </h2>
        </div>
    );
};