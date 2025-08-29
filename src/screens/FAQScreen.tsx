<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import axios from 'axios';
=======
import React, { useState } from 'react';
>>>>>>> f7f1493ea098c61d7f951a8ccad8f6d40cd12042
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Image } from 'react-native';
<<<<<<< HEAD
import { get_data_uri } from '../config/api';
import Icon from 'react-native-vector-icons/Ionicons';

interface FAQItem {
  _id: string;
  name: string;
  message: string;
}

const FAQScreen = ({ navigation }: any) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const [faqData, setFaqData] = useState<FAQItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  type FAQResponse = {
    success: boolean;
    faqs: FAQItem[];
  };

  useEffect(() => {
    const fetchFAQ = async () => {
      try {
        const response = await axios.get<FAQResponse>(
          get_data_uri('GET_FAQS')
        );
        setFaqData(response.data.faqs);
      } catch (err) {
        console.error(err);
        setError('Failed to load FAQ data');
      } finally {
        setLoading(false);
      }
    };

    fetchFAQ();
  }, []);

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev =>
      prev.includes(id)
=======

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQScreen = ({ navigation }: any) => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: 'What is Bitcoin mining?',
      answer: 'Bitcoin mining involves solving complex mathematical problems to validate transactions on the blockchain, earning newly minted bitcoins as rewards.',
    },
    {
      id: 2,
      question: 'Do I need special hardware?',
      answer: 'While specialized ASIC miners are most efficient, our app allows you to start with basic hardware and gradually upgrade as you earn more.',
    },
    {
      id: 3,
      question: 'Can I mine on my phone?',
      answer: 'Our app provides mobile monitoring and management of your mining operations, though actual mining requires dedicated hardware for optimal results.',
    },
    {
      id: 4,
      question: 'How do I withdraw earnings?',
      answer: 'You can withdraw your earnings to your personal wallet once you reach the minimum threshold. Go to Wallet > Withdraw and follow the instructions.',
    },
    {
      id: 5,
      question: 'Is Bitcoin mining profitable?',
      answer: 'Profitability depends on electricity costs, hardware efficiency, and Bitcoin price. Our app provides real-time profitability calculators to help you make informed decisions.',
    },
    {
      id: 6,
      question: 'How secure is my account?',
      answer: 'We use industry-standard encryption, two-factor authentication, and secure wallet integration to protect your account and earnings.',
    },
    {
      id: 7,
      question: 'What are mining pools?',
      answer: 'Mining pools combine computational power from multiple miners to increase chances of solving blocks and earning rewards, which are then distributed among participants.',
    },
    {
      id: 8,
      question: 'How often are rewards distributed?',
      answer: 'Rewards are distributed automatically based on your contribution to the mining pool, typically every 24 hours or when blocks are successfully mined.',
    },
  ];

  const toggleExpanded = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
>>>>>>> f7f1493ea098c61d7f951a8ccad8f6d40cd12042
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const renderFAQItem = (item: FAQItem) => {
<<<<<<< HEAD
    const isExpanded = expandedItems.includes(item._id);

    return (
      <View key={item._id} style={styles.faqItem}>
        <TouchableOpacity
          style={styles.questionContainer}
          onPress={() => toggleExpanded(item._id)}
          activeOpacity={0.7}
        >
          <Text style={styles.questionText}>{item.name}</Text>
=======
    const isExpanded = expandedItems.includes(item.id);
    
    return (
      <View key={item.id} style={styles.faqItem}>
        <TouchableOpacity
          style={styles.questionContainer}
          onPress={() => toggleExpanded(item.id)}
          activeOpacity={0.7}
        >
          <Text style={styles.questionText}>{item.question}</Text>
>>>>>>> f7f1493ea098c61d7f951a8ccad8f6d40cd12042
          <Text style={[styles.expandIcon, isExpanded && styles.expandIconRotated]}>
            ▼
          </Text>
        </TouchableOpacity>
<<<<<<< HEAD

        {isExpanded && (
          <View style={styles.answerContainer}>
            <Text style={styles.answerText}>{item.message}</Text>
=======
        
        {isExpanded && (
          <View style={styles.answerContainer}>
            <Text style={styles.answerText}>{item.answer}</Text>
>>>>>>> f7f1493ea098c61d7f951a8ccad8f6d40cd12042
          </View>
        )}
      </View>
    );
  };

  return (
     <ImageBackground
          source={require('../assets/images/bg_faq.png')}
          style={[styles.backgroundImage, { backgroundColor: '#0F172A' }]}
          resizeMode="cover">
          <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
    <SafeAreaView style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
<<<<<<< HEAD
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-back" size={24} color="white" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>FAQ</Text>
=======
        <Text style={styles.headerTitle}>FAQ</Text>
        <View style={styles.placeholder} />
>>>>>>> f7f1493ea098c61d7f951a8ccad8f6d40cd12042
      </View>

      {/* FAQ Icon */}
   
                         <View style={styles.logoContainer}>
                           <View style={styles.supportLogo}>
                             <Image
                               source={require('../assets/images/icon_faq.png')}
                               style={styles.supportImage}
                               resizeMode="contain"
                             />
                           </View>
                         </View>
     
             {/* Form */}

      {/* FAQ List */}
<<<<<<< HEAD

      {
        loading ? (
          <Text style={{ color: '#fff', textAlign: 'center' }}>Loading FAQs...</Text>
        ) : error ? (
          <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text>
        ) : (
        
        <ScrollView 
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
          
          {faqData.map(renderFAQItem)}
          
          <View style={styles.bottomSpacing} />
        </ScrollView>
        
        )
      }
=======
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
        
        {faqData.map(renderFAQItem)}
        
        <View style={styles.bottomSpacing} />
      </ScrollView>
>>>>>>> f7f1493ea098c61d7f951a8ccad8f6d40cd12042

      {/* Background Decoration */}
      <View style={styles.backgroundDecoration}>
        {[...Array(6)].map((_, index) => (
          <View
            key={index}
            style={[
              styles.hexagon,
              {
                top: `${20 + index * 15}%`,
                left: `${10 + (index % 2) * 80}%`,
                opacity: 0.1,
              },
            ]}
          />
        ))}
      </View>
    </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
<<<<<<< HEAD
    paddingVertical: 16,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 16,
    padding: 8,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
=======
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#2d2d44',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2d2d44',
    alignItems: 'center',
    justifyContent: 'center',
>>>>>>> f7f1493ea098c61d7f951a8ccad8f6d40cd12042
  },
  backButtonText: {
    color: '#00d4ff',
    fontSize: 20,
    fontWeight: 'bold',
  },
<<<<<<< HEAD
=======
  headerTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
>>>>>>> f7f1493ea098c61d7f951a8ccad8f6d40cd12042
  placeholder: {
    width: 40,
  },
  iconContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  iconBackground: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#2d2d44',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#00d4ff',
  },
  iconText: {
    color: '#00d4ff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  faqItem: {
    marginBottom: 15,
    borderRadius: 12,
    backgroundColor: '#2d2d44',
    overflow: 'hidden',
  },
  questionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  questionText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
    marginRight: 10,
  },
  expandIcon: {
    color: '#00d4ff',
    fontSize: 14,
    fontWeight: 'bold',
    transform: [{ rotate: '0deg' }],
  },
  expandIconRotated: {
    transform: [{ rotate: '180deg' }],
  },
  answerContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#3d3d54',
  },
  answerText: {
    color: '#b0b0b0',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 15,
  },
  bottomSpacing: {
    height: 50,
  },
  backgroundDecoration: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  hexagon: {
    position: 'absolute',
    width: 40,
    height: 40,
    backgroundColor: '#00d4ff',
    transform: [{ rotate: '45deg' }],
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
   supportLogo: {
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
   supportImage: {
    width: '100%',
    height: '100%',
    transform: [{ rotate: '3deg' }],
  },
   logoContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
});

export default FAQScreen;
