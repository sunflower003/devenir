import styles from './ProductCard.module.css';
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
    const { name, price, images, colors, tag } = product;
    const [mainImage, hoverImage] = images;

    const getTagClassName = (tagValue) => {
        if (!tagValue) return '';

        const tagLower = tagValue.toLowerCase();
        if (tagLower === 'new') return styles.newTag;
        if (tagLower === 'limited edition') return styles.limitedTag;
        if (tagLower === 'hot') return styles.hotTag;

        return styles.tag;
    }

    return (
        <div className={styles.productCard}>
            <div className={styles.imageContainer} style={{ 
                backgroundImage: `url(${hoverImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
                }}>
                <img src={mainImage} />
                <div className={styles.showNowButton}>Shop now</div>
            </div>
            <div className={styles.productInfo}>
                <h4>{name}</h4>
                <div className={styles.colorSelector}>
                    {colors.map(color => (
                        <span key={color.name} className={styles.colorOption} style={{ backgroundColor: color.hex }}></span>
                    ))}
                </div>
                <p className={styles.price}>${price.toFixed(2)}</p>
                {tag && <span className={`${styles.tag} ${getTagClassName(tag)}`}>{tag}</span>}
            </div>
        </div>
    );
};

export default ProductCard;