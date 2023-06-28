Public Class YouthInMotion 
    Private Structure YouthInfo
        Public firstName As String 
        Public lastName As String 
        Public age As Integer 
        Public physicalActivity As Integer 
        Public mentalActivity As Integer 
    End Structure
    
    Private _youthList As New List(Of YouthInfo) 
    
    Public Function AddYouth(ByVal firstName As String, ByVal lastName As String, 
                             ByVal age As Integer, ByVal physicalActivity As Integer, 
                             ByVal mentalActivity As Integer) As Boolean
        Try 
            Dim youthInfo As YouthInfo 
            youthInfo.firstName = firstName 
            youthInfo.lastName = lastName 
            youthInfo.age = age 
            youthInfo.physicalActivity = physicalActivity 
            youthInfo.mentalActivity = mentalActivity 
            
            _youthList.Add(youthInfo)
            Return True 
        Catch ex As Exception
            Return False 
        End Try 
    End Function 
    
    Public Function DeleteYouth(ByVal firstName As String, ByVal lastName As String) As Boolean 
        Try 
            Dim youthInfo As YouthInfo 
            youthInfo = GetYouthByName(firstName, lastName)
            
            If Not IsNothing(youthInfo.firstName) Then
                _youthList.Remove(youthInfo)
                Return True 
            End If 
            Return False 
        Catch ex As Exception
            Return False 
        End Try 
    End Function 
    
    Private Function GetYouthByName(ByVal firstName As String, ByVal lastName As String) As YouthInfo 
        Dim youthInfo As YouthInfo 
        youthInfo.firstName = String.Empty 
        youthInfo.lastName = String.Empty 
        
        For Each yi As YouthInfo In _youthList 
            If String.Compare(yi.firstName, firstName) = 0 And 
                String.Compare(yi.lastName, lastName) = 0 Then
                youthInfo = yi 
                Exit For 
            End If 
        Next 
        Return youthInfo 
    End Function 
    
    Public Function GetYouthList() As List(Of YouthInfo) 
        Return _youthList 
    End Function 
    
    Public Function GetAveragePhysicalActivity() As Double
        Dim total As Integer = 0
        For Each yi As YouthInfo In _youthList
            total += yi.physicalActivity
        Next
        If _youthList.Count = 0 Then
            Return 0
        Else
            Return Math.Round(total / _youthList.Count, 2)
        End If
    End Function
    
    Public Function GetAverageMentalActivity() As Double
        Dim total As Integer = 0
        For Each yi As YouthInfo In _youthList
            total += yi.mentalActivity
        Next
        If _youthList.Count = 0 Then
            Return 0
        Else
            Return Math.Round(total / _youthList.Count, 2)
        End If
    End Function
    
    Public Function GetAverageAge() As Double
        Dim total As Integer = 0
        For Each yi As YouthInfo In _youthList
            total += yi.age
        Next
        If _youthList.Count = 0 Then
            Return 0
        Else
            Return Math.Round(total / _youthList.Count, 2)
        End If
    End Function 
End Class