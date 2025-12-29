import { redirect } from 'next/navigation';

type Props = {
  params: { teamId: string };
};

export default function EliteTeamPage({ params }: Props) {
  redirect(`/teams/${params.teamId}`);
}
