import React from 'react'

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
function id() {
  return (
    <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">Step 1: Try it</ThemedText>
    </ThemedView>
  )
}

export default id
