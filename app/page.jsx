import BackgroundVideo from 'components/background-video/background-video.component';
import { Card } from 'components/card';
import Image from 'next/image';
import { getNetlifyContext } from 'utils';

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <>
            <BackgroundVideo>
                <div>
                    <div className="wrapper">
                        <div className="container">
                            <div id="welcome">
                            </div>
                            <Image
                                className='logo'
                                src="/images/logo.png"
                                alt="alt"
                                width={246}
                                height={246}
                                priority={true}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    maxWidth: '500px'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </BackgroundVideo>
        </>
    );
}
