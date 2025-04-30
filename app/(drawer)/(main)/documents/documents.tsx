
import { Accordion, AccordionItem, AccordionHeader, AccordionTrigger, AccordionTitleText, AccordionContent } from "@/components/ui/accordion";
import { DocumentsScreenStyles, ScheduleScreenStyles } from "@/theme/styles";
import React from "react";
import { SafeAreaView, View, ScrollView, Text } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { RFValue } from "react-native-responsive-fontsize";
import { Color } from "@/theme/Colors";

export default function DocumentScreen({ route }: any) {
  const { name } = route;

  const ArrowIcon = (isExpanded: any) => {
    return (
      <>
        {isExpanded ? (
          <AntDesign name="up" size={RFValue(16)} color={Color.black} style={{ textAlign: 'center', alignItems: 'center' }} />
        ) : (
          <AntDesign name="down" size={RFValue(16)} color={Color.black} />
        )}
      </>
    )
  }

  return (
    <SafeAreaView style={ScheduleScreenStyles.container}>
      <View style={ScheduleScreenStyles.container}>
        <ScrollView style={ScheduleScreenStyles.content}>

          {name === "Missing" && (
            <>
              <Accordion variant="filled" style={DocumentsScreenStyles.AccordionContainer}>
                <AccordionItem value="missing">
                  <AccordionHeader>
                    <AccordionTrigger style={DocumentsScreenStyles.ActionTrigger}>
                      {({ isExpanded }) => {
                        return (
                          <>
                            <AccordionTitleText style={DocumentsScreenStyles.AccordionItemText}>Missing documents (0)</AccordionTitleText>
                            {ArrowIcon(isExpanded)}
                          </>
                        )
                      }}
                    </AccordionTrigger >
                  </AccordionHeader>
                  <AccordionContent>
                    <Text>No missing documents.</Text>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="expired">
                  <AccordionHeader>
                    <AccordionTrigger style={DocumentsScreenStyles.ActionTrigger}>
                      {({ isExpanded }) => {
                        return (
                          <>
                            <AccordionTitleText style={DocumentsScreenStyles.AccordionItemText}>Expired documents (0)</AccordionTitleText>
                            {ArrowIcon(isExpanded)}
                          </>
                        )
                      }}
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent>
                    <Text>No expired documents.</Text>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </>
          )}

          {name === "Uploaded" && (
            <Accordion variant="filled" style={DocumentsScreenStyles.AccordionContainer}>
              <AccordionItem value="uploaded">
                <AccordionHeader>
                  <AccordionTrigger style={DocumentsScreenStyles.ActionTrigger}>
                    {({ isExpanded }) => {
                      return (
                        <>
                          <AccordionTitleText style={DocumentsScreenStyles.AccordionItemText}>Uploaded documents (0)</AccordionTitleText>
                          {ArrowIcon(isExpanded)}
                        </>
                      )
                    }}
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent>
                  <Text>No uploaded documents.</Text>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}

        </ScrollView>
      </View>
    </SafeAreaView >
  );
}
