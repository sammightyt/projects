import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.dob || !data.program || !data.agreeToTerms) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate program-specific fields
    if (data.program === 'Youth' && !data.ageGroup) {
      return NextResponse.json(
        { error: 'Age group is required for youth registration' },
        { status: 400 }
      );
    }

    if (data.program === 'Adult' && !data.league) {
      return NextResponse.json(
        { error: 'League selection is required for adult registration' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Send email notification to admin
    // 2. Save registration to database or CMS
    // 3. Send confirmation email to registrant
    // 4. Add to mailing list or CRM
    
    console.log('Registration form submission:', data);

    // For now, just return success
    return NextResponse.json(
      { message: 'Registration submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing registration:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
