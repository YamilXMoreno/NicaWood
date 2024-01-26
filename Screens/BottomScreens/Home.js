import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Header from '../../Components/Header';
import { Products } from '../../Data/Products'; 
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();

    const renderFeaturedProducts = (categoryIndex) => {
        const category = Products.categories[categoryIndex];

        if (!category || !category.data) {
            return null;
        }

        return (
            <View style={styles.featuredProducts}>
                <FlatList
                    horizontal
                    data={category.data}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Details', { product: item })}>
                            <View style={styles.featuredProductItem}>
                                {item.images && item.colors && item.sizes && item.images[item.colors[0]] && item.images[item.colors[0]][item.sizes[0]] && (
                                    <Image source={item.images[item.colors[0]][item.sizes[0]]} style={styles.featuredProductImage} />
                                )}

                                <Text style={styles.featuredProductName}>{item.name}</Text>

                                <View style={styles.featuredProductPriceContainer}>
                                    {item.oldPrice !== item.price && (
                                        <Text style={styles.featuredProductOldPrice}>{item.oldPrice}</Text>
                                    )}

                                    <Text style={styles.featuredProductPrice}>${item.price}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        );
    };

    return (
        <ScrollView>
            <Header />
            {/* Banner Image */}
            <Image source={require('../../assets/banner.jpg')} style={styles.imageBanner} />
            <Text style={styles.sectionTitle}>Newest Products</Text>

            {/* Render Featured Products for each category */}
            {renderFeaturedProducts(0)}
            <Text style={styles.sectionTitle}>Catalog</Text>
            {renderFeaturedProducts(1)}
            {renderFeaturedProducts(2)}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    imageBanner: {
        width: '90%',
        height: 200,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 180,
        marginRight: 5,
    },
    featuredProducts: {
        marginHorizontal: 22,
        marginTop: 12,
    },
    sectionTitle: {
        fontSize: 25,
        fontWeight: '800',
        marginVertical: 16,
        marginLeft: 25,
        marginBottom: 15,
    },
    featuredProductItem: {
        marginRight: 18,
        marginBottom: 85,
    },
    featuredProductImage: {
        width: 140,
        height: 140,
        borderRadius: 10,
    },
    featuredProductName: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 8,
    },
    featuredProductPriceContainer: {
        flexDirection: 'row',
        marginTop: 5,
    },
    featuredProductOldPrice: {
        fontSize: 12,
        marginRight: 0,
        textDecorationLine: 'line-through',
    },
    featuredProductPrice: {
        fontSize: 12,
    },
});

export default Home;
