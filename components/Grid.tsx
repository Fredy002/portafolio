import { gridItems } from '@/data'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

const Grid = () => {
    return (
        <section id='about'>
            <BentoGrid>
                {
                    gridItems.map((
                        { id, title, titleClassName, description, img, imgClassName, spareImg, className }
                    ) => (
                        <BentoGridItem
                            id={id}
                            key={id}
                            title={title}
                            titleClassName={titleClassName}
                            description={description}
                            img={img}
                            imgClassName={imgClassName}
                            spareImg={spareImg}
                            className={className}
                        />
                    )
                    )
                }
            </BentoGrid>
        </section>
    )
}

export default Grid
