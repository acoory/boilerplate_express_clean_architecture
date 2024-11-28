import jwt from 'jsonwebtoken';


export default class JwtService {

    static sign(payload: any): string {
        const expireToken = Math.floor(Date.now() / 1000) + (60 * 60 * 24);

        return jwt.sign({payload}, process.env.JWT_SECRET as string, {expiresIn: expireToken});
    }

    static verify(token: string, secret: string): any {
        return jwt.verify(token, process.env.JWT_SECRET as string);
    }
}