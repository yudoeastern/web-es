import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, company, jobTitle, message } = body;

    // Validation
    const errors: Record<string, string> = {};

    if (!firstName?.trim() || firstName.trim().length < 2) {
      errors.firstName = 'First name is required (min 2 characters)';
    }

    if (!lastName?.trim() || lastName.trim().length < 2) {
      errors.lastName = 'Last name is required (min 2 characters)';
    }

    if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Valid email is required';
    }

    if (!phone?.trim() || !/^[\d\s\+\-\(\)]+$/.test(phone)) {
      errors.phone = 'Valid phone number is required';
    }

    if (!company?.trim()) {
      errors.company = 'Company name is required';
    }

    if (!jobTitle?.trim()) {
      errors.jobTitle = 'Job title is required';
    }

    if (!message?.trim() || message.trim().length < 10) {
      errors.message = 'Message is required (min 10 characters)';
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    // TODO: Integrate with email service later
    // For now, log the submission
    console.log('Contact form submission:', {
      firstName,
      lastName,
      email,
      phone,
      company,
      jobTitle,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send message. Please try again.' 
      },
      { status: 500 }
    );
  }
}
