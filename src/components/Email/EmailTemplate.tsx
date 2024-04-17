import { Html } from '@react-email/html';

export default function EmailTemplate({ name, email, message }: ContactMeProps) {
    return (
        <Html>
            <ul>
                <li>
                    <strong>Name:</strong> {name}
                </li>
                <li>
                    <strong>Email:</strong> {email}
                </li>
                <li>
                    <strong>Message:</strong> {message}
                </li>
            </ul>
        </Html>
    );
}
