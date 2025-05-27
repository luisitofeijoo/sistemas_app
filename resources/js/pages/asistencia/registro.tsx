import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Registro() {

    return (
        <>
            <div className="relative w-full max-w-md">
                <Input type="text" placeholder="Ingrese su dni"/>
                <Button>Registrar</Button>
            </div>

        </>
    );
}
