export const db = {
    saveCustomer: async (customerData) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const customers = JSON.parse(localStorage.getItem('customers') || '[]');
                customers.push({ ...customerData, id: Date.now(), createdAt: new Date().toISOString() });
                localStorage.setItem('customers', JSON.stringify(customers));
                console.log('Customer saved:', customerData);
                resolve({ success: true, message: 'Customer saved successfully!' });
            }, 1000);
        });
    },

    getProducts: async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { id: 1, name: 'Smart Pet Feeder', category: 'Pets', price: 129.99, image: 'https://images.unsplash.com/photo-1585846888147-9922b7f12454?w=500&q=80', description: 'Automatic feeder with WiFi control.' },
                    { id: 2, name: 'Robot Vacuum Cleaner', category: 'Household', price: 299.99, image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&q=80', description: 'Keep your floors clean automatically.' },
                    { id: 3, name: 'Interactive Cat Laser', category: 'Pets', price: 24.99, image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&q=80', description: 'Hours of fun for your feline friend.' },
                    { id: 4, name: 'Smart LED Bulb', category: 'Household', price: 15.99, image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=500&q=80', description: 'Voice controlled RGB lighting.' },
                    { id: 5, name: 'Ergonomic Dog Bed', category: 'Pets', price: 59.99, image: 'https://images.unsplash.com/photo-1591946614720-90a587da4a36?w=500&q=80', description: 'Orthopedic memory foam bed.' },
                    { id: 6, name: 'Air Purifier', category: 'Household', price: 89.99, image: 'https://images.unsplash.com/photo-1585776245991-cf79dd8fc176?w=500&q=80', description: 'HEPA filter for clean air.' },
                ]);
            }, 500);
        });
    }
};
