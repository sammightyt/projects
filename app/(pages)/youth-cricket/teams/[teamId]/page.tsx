import { redirect } from 'next/navigation';

type Props = {
  params: { teamId: string };
};

export default function YouthTeamPage({ params }: Props) {
  redirect(`/teams/${params.teamId}`);
}
